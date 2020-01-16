const axios = require('axios')

module.exports = {
  parse(req, res) {
    const { url } = req.body
    console.log(url)
    axios({
      method: 'post',
      url: `http://api.ocr.space/parse/image`,
      data: {
        "url": "http://dl.a9t9.com/blog/ocr-online/screenshot.jpg"
      },
      headers: { apikey: process.env.OCRAPI },
    })
      .then(results => res.send(results.data))
      .catch(err => res.send(err.message))
  }
}