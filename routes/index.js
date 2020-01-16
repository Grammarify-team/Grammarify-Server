const express = require('express')
const router = express.Router()

router.use('/ocr', require('./ocrRouter'))
router.use('/grammar', require('./grammarRoute'))

module.exports = router