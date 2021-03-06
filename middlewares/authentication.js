const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const token = req.headers.user_token
  if (token) {
    try {
      const verified = jwt.verify(token, process.env.SECRET)
      if (verified) {
        res
          .status(200)
          .json(verified)
        next()
      }
    } catch (err) {
      res
        .status(401)
        .json(({ msg: err.message }))
    }
  } else res
    .status(403)
    .json({ msg: 'This page can only be accessed by registered users' })
}