const express = require('express')
const ocrRouter = express.Router()
const ocrController = require('../controllers/ocrController')

ocrRouter.post('/parse', ocrController.parse)

module.exports = ocrRouter