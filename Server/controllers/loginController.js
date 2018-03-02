const configurationModel = require('../models/configurationModel')
const accountModel = require('../models/accountModel')
const switcher = require('../switcher')

function signUp(req, res) {
  let item = req.body
  let newUser = new accountModel({
    _id: item._id,
    password: item.password,
    dbName: "CMS"+item.dbName
  })

  
  newUser.save((err, newUser) => {
    if(err){
      res.status(500)
      res.send(`Cannot create user ${err}`)
    }
    res.status(200);
    res.json(newUser)
    setUpUserDB(newUser.dbName)
  })
    
}

function setUpUserDB(userDB){
  switcher.getUser(userDB)

  let newUserSetUp = new configurationModel()
  newUserSetUp.save()

}

module.exports = {
  signUp
}

