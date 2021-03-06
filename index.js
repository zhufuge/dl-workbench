const process = require('process')
const Koa = require('koa')
const chalk = require('chalk')


const app = new Koa()

app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  ctx.set('X-Response-Time', `${ms}ms`)
})

app.use(async (ctx, next) => {
  const start = new Date()
  console.log(`--> ${chalk.yellow(ctx.method)} ${ctx.url}`)
  await next()
  const ms = new Date() - start
  console.log(` <- ${chalk.yellow(ctx.method)} ${ctx.url} - ${chalk.gray(ms + 'ms')}`)
})

require('./server/router')(app)

const port = process.argv[2] || 3000
app.listen(port, () => console.log('Server running at',  chalk.blue(`http://localhost:${port}`)))
