const mongoose = require('mongoose')

const configurationSchema = mongoose.Schema({
  _id: { type: String, required: true, default: "0" },
  pageName: { type: String, required: true, default: "myPage" },
})

const configuration = mongoose.model("configuration", configurationSchema)
module.exports = configuration
