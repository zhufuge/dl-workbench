function contentType(fileType) {
  const ContentType = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/x-javascript',
    '.json': 'application/json',
    '.jpg': 'image/jpeg',
    '.png': 'image/png',
    '.mp3': 'audio/mp3',
  }
  const type = ContentType[fileType]
  return (type === void 0) ? 'text/plain' : type
}

module.exports = {
  contentType,
}
