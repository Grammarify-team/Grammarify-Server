const axios = require('axios')

module.exports = {
  parse(req, res) {
    const { url } = req.body
    const orckey = process.env.OCRAPI
    axios({
      method: 'get',
      url: `http://api.ocr.space/parse/imageurl?apikey=${orckey}&url=${url}`,
    })
      // .then(results => {
      //   const result = results.data.ParsedResults[0].ParsedText.split('\r\n').join(' ')
      //   res.status(200).json({ parsed: result })
      // })
      // .catch(err => res.status(500).json({ msg: err.message }))
      .then(results => {
        return results.data.ParsedResults[0].ParsedText.split('\r\n').join(' ')
      })
      .then(parsed => {
        // console.log('hasil parsed', parsed)
        axios({
          method: 'get',
          url: `http://localhost:3000/grammar/${parsed}`
        })
          .then(result => {
            const data = result.data
            console.log('hasil grammar check', data.matches)
            res.status(200).json({ result: data.matches })
          })
          .catch(err => res.status(500).json({ msg: err.message }))
      })
      .catch(err => res.status(500).json({ msg: err.message }))
  }
}