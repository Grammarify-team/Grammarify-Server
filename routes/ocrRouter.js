const express = require('express')
const ocrRouter = express.Router()
const ocrController = require('../controllers/ocrController')

ocrRouter.post('/parse', ocrController.parse)
ocrRouter.get('/parse', (req, res) => res.send('asd'))

module.exports = ocrRouter