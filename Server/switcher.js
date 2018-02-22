const mongoose = require('mongoose')

function getMaster(){
  closeCon()
  mongoose.connect(process.env.DBM)
}

function getUser(userdb){
  closeCon()
  mongoose.connect(process.env.DB+userdb)
}

function closeCon(){
  mongoose.connection.close()
}

module.exports = {
  getUser,getMaster
}