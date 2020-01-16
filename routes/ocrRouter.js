const express = require('express')
const ocrRouter = express.Router()
const ocrController = require('../controllers/ocrController')

ocrRouter.get('/parse', ocrController.parse)

module.exports = ocrRouter