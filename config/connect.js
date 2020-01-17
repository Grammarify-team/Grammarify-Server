const mongoose = require('mongoose')

const connect = () => {
  mongoose.connect('mongodb://localhost:27017/Grammarify', { useNewUrlParser: true, useUnifiedTopology: true }, err => {
    if (err) console.log('Failed to connect to the database')
    else console.log('Connected to the database')
  })
}

module.exports = { config: connect }