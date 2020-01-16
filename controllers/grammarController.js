const axios = require('axios')

class Controller {
  static checkGrammar(req, res, next) {
    axios({
      method: 'get',
      url: `http://api.grammarbot.io/v2/check?api_key=KS9C5N3Y&text=${req.params.text}&language=en-US`
    })
      .then(function (response) {
        res.status(200).json(response.data)
      })
      .catch(err => {
        res.send(err)
      })
  }
}

module.exports = Controller