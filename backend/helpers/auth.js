var db = require('../models');
var jwt = require('jsonwebtoken');

exports.login = async function(req, res, next){
  try {
    let user = await db.User.findOne({username: req.body.username});
    let {id, username, profileImage} = user;
    let isMatch = await user.comparePassword(req.body.password);
    
    if(isMatch){
      let token = jwt.sign({id, username, profileImage}, process.env.SECRET_KEY);
      return res.status(200).json({id, username, profileImage, token});
    } else {
        return next({
          status: 400,
          message: "Invalid Username/Password"
        });
    }
  }
  catch (e){
    console.log(e);
    return next({
             status: 400,
             message: "Invalid Username/Password"
           });
  }
};

exports.register = async function(req, res, next){
   try {
      let user = await db.User.create(req.body);
      let {id, username, profileImage} = user;
      let token = jwt.sign({id, username, profileImage}, process.env.SECRET_KEY);
      return res.status(200).json({id, username, profileImage, token});
   }
   catch (error){
      if(error.code === 11000){
         error.message = "Sorry, that username is unavailable";
      }
      return next({
         status: 400,
         message: error.message
      });
   }
};

module.exports = exports;