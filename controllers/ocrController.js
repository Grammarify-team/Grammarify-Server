const axios = require('axios')

module.exports = {
  parse(req, res) {
    const { url } = req.body
    const ocrkey = process.env.OCRAPI
    let parsedText = null
    axios({
      method: 'get',
      url: `http://api.ocr.space/parse/imageurl?apikey=${ocrkey}&url=${url}`,
    })
      .then(results => {
        return results.data.ParsedResults[0].ParsedText.split('\r\n').join(' ')
      })
      .then(parsed => {
        // console.log('hasil parsed', parsed)
        parsedText = parsed
        return axios({
          method: 'get',
          url: `http://api-grammarify.nafies.tech/grammar/${parsed}`
        })
      })
      .then(result => {
        const data = result.data
        // console.log('hasil grammar check', data.matches)
        res.status(200).json({ result: data, parsedText })
      })
      .catch(err => res.status(500).json({ msg: err }))
  }
}