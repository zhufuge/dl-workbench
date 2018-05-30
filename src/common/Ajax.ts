function uploadIamge(image) {
  const form = new FormData()
  form.append('image', image)
  return fetch('/upload-image', {
    method: 'POST',
    body: form
  })
}

export default function(url, ...data) {
  const hash = {
    'upload-image': uploadIamge
  }
  const fn = hash[url] || (function() {})
  return fn(...data)
}