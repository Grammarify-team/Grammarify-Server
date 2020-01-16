const axios = require('axios')

module.exports = {
  parse(req, res) {
    const { url } = req.body
    console.log(url)
    axios({
      method: 'post',
      url: `http://api.ocr.space/parse/image`,
      headers: {
        'content-type': 'image/png',
        apikey: process.env.OCRAPI
      },
      data: {
        url
      }
    })
      .then(results => res.send(results.data))
      .catch(err => res.send(err.message))
  }
}