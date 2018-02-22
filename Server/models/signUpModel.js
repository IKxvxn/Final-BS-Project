const mongoose = require('mongoose')

const signUpSchema = mongoose.Schema({
  _id: { type: String, required: true },
  password: { type: String, required: true },
  dbName: { type: String, required: true }
})

const user = mongoose.model("user", signUpSchema)
module.exports = user
