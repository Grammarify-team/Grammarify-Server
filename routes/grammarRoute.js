const express = require('express')
const router = express.Router()
const Grammar = require('../controllers/grammarController')

router.get('/:text',Grammar.checkGrammar )

module.exports = router