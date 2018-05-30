const fs = require('fs')
const path = require('path')
const multer = require('koa-multer')
const UPLOAD_IMAGE_DIR = path.join(__dirname, '../data/uploads')

const upload = multer({ dest: UPLOAD_IMAGE_DIR }).single('image')
function handleUploadImage(ctx) {
  const file = ctx.req.file
  fs.rename(
    file.path,
    path.join(file.destination, file.originalname),
    (err) => console.log(err || 'Upload successed!') 
  )

  ctx.status = 200
  ctx.body = 0
}

module.exports = function (router) {
  router.post('/upload-image', upload, handleUploadImage)
}

