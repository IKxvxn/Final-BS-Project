const exampleModel = require('../models/example')

function exampleFunction(req, res) {
  exampleModel.find()
    
}

module.exports = {
  exampleFunction
}

