const configuration = require('../models/configurationModel')
const switcher = require('../switcher')

function upDateProps(req, res) {
  var props = req.body
  configuration.findById("config",(err, configurations)=>{
    if (err) {
      res.status(500)
      res.send(`Cannot find id ${err}`)
    }
    configurations.update(props).exec((err)=>{
      if(err){
        res.status(500)
        res.send(`Cannot update ${err}`)
      }
      res.status(200);
      res.json({});
    })
  })
    
}

function getAll(req, res) {
  configuration.find()
    .exec((err, configurations) => {
      if (err) {
        res.status(500)
        res.send(`Ocurrió un error 💩 ${err}`)
      }
      res.status(200)
      res.json(configurations)
    })
}

module.exports = {
  upDateProps,getAll
}

