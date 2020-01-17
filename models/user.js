const mongoose = require('mongoose')
const Schema = mongoose.Schema
const hash = require('../helpers/hash')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new Schema({
  email: { type: String, unique: true, minlength: 6 },
  password: { type: String, minlength: 4 }
})

userSchema.plugin(uniqueValidator)

userSchema.pre('save', function () {
  this.password = hash(this.password)
  next()
})

const User = mongoose.model('User', userSchema)

module.exports = User