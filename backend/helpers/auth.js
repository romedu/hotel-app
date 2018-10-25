var db = require('../models');
var jwt = require('jsonwebtoken');

exports.login = async function(req, res, next){
  try {
    const user = await db.User.findOne({username: req.body.username});
    const {id, username, profileImage} = user;
    const isMatch = await user.comparePassword(req.body.password);
    
    if(isMatch){
      const token = jwt.sign({id, username, profileImage}, process.env.SECRET_KEY);
      return res.status(200).json({id, username, profileImage, token});
    } else {
        return next({
          status: 400,
          message: "Invalid Username/Password"
        });
    }
  }
  catch (e){
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

exports.verifyToken = (req, res, next) => {
    const token = req.get("Authorization"),
          {SECRET_KEY} = process.env;
    
    if(!token){
        const error = new Error("Invalid/Expired Token");
        return next(error);
    }
    
    return jwt.verify(token, SECRET_KEY, (error, decoded) => {
               if(error){
                  error.message = "Invalid/Expired Token";
                  return next(error);
               }
               
               return res.status(200).json(decoded); 
           });
};

module.exports = exports;