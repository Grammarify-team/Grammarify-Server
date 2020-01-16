const bcryptjs = require('bcryptjs')

module.exports = password => {
  const salt = bcryptjs.genSaltSync(10)
  return bcryptjs.hashSync(password, salt)
}