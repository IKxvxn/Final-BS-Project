const configuration = require('../models/configurationModel')
const post = require('../models/postModel')
const switcher = require('../switcher')
require('mongoose').set('debug', true);

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

function createPost(req, res) {
  let newPost = new post(req.body)
  newPost.save((err, newPost) => {
    if(err){
      console.log(err)
      res.status(500)
      res.send(`Cannot insert post ${err}`)
    }
    res.status(200);
    res.json(newPost)
  })
}

function upDatePost(req, res) {
  updatedPost = req.body
  post.findOneAndUpdate({ "_id": updatedPost._id }, { "$set": { "title": updatedPost.title, "content": updatedPost.content, "updated": Date.now()}},{new:true}).exec(function(err,updatedpost){
    if(err) {
        console.log(err);
        res.status(500).send(err);
    } else {
      res.status(200).json(updatedpost);
    }
  });
    
}


module.exports = {
  upDateProps,getAll,createPost,upDatePost
}



