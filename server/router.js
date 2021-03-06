const fs = require('fs')
const path = require('path')
const Router = require('koa-router')
const koaStatic = require('koa-static')

const readFileAsync = require('util').promisify(fs.readFile)
const { contentType } = require('./helper')

const PUBLIC_DIR = path.join(__dirname, '../dist')

const router = new Router()

function sendFile(ctx, file) {
  return readFileAsync(file).then(data => {
    ctx.status = 200
    ctx.set('Content-Type', contentType(path.extname(file)))
    ctx.body = data
  }).catch(err => {
    ctx.status = 404
    console.log(err)
  })
}
const home = (ctx) => sendFile(ctx, path.join(PUBLIC_DIR, '/index.html'))


router.get('/', home)
require('./upload')(router)
router.all('*', koaStatic(PUBLIC_DIR))


module.exports = (app) => app
  .use(router.routes())
  .use(router.allowedMethods())
