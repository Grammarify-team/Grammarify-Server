const express = require('express')
const router = express.Router()

const files = require('../middlewares/files')

/* GET main endpoint. */
router.get('/', (req, res, next) => {
  res.send({ message: 'Welcome Buddy!' })
})
router.post('/upload',
  files.multer.single('file'), 
  files.sendUploadToGCS,
  (req, res) => {
    res.send({
      status: 200,
      message: 'Your file is successfully uploaded',
      link: req.file.cloudStoragePublicUrl
    })
})

router.use('/ocr', require('./ocrRouter'))


module.exports = router