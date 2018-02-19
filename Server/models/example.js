const mongoose = require('mongoose')

const exampleSchema = mongoose.Schema({
  name: { type: String, required: true },
})

const example = mongoose.model("example", exampleSchema)
module.exports = example
