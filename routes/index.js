const express = require('express')
const router = express.Router()

router.use('/ocr', require('./ocrRouter'))

module.exports = router