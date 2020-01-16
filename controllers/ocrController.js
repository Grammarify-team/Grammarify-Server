const axios = require('axios')

module.exports = {
  parse(req, res) {
    const { url } = req.body
    console.log(url)
    axios({
      method: 'get',
      url: `http://api.ocr.space/parse/imageurl?apikey=${process.env.OCRAPI}&url=${url}`,
    })
      .then(results => {
        const result = results.data.ParsedResults[0].ParsedText.split('\r\n').join(' ')
        res.status(200).json({ parsed: result })
      })
      .catch(err => res.status(500).json({ msg: err.message }))
  }
}