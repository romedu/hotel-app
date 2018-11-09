const DB = require('../models'),
      jwt = require('jsonwebtoken'),
      {createError} = require("./error");

exports.login = async function(req, res, next){
   try {
      const {username, password} = req.body; 
      const user = await DB.User.findOne({username});
      const {id, profileImage, isAdmin} = user;
      const isMatch = await user.comparePassword(password);
    
      if(isMatch){
         const token = jwt.sign({id, username, profileImage, isAdmin}, process.env.SECRET_KEY);
         return res.status(200).json({id, username, profileImage, isAdmin, token});
      } 
      else {
         const error = createError(400, "Invalid Username/Password");
         return next(error);
      }
  }
  catch (error){
      error = createError(400, "Invalid Username/Password");
      return next(error);
  }
};

exports.register = async function(req, res, next){
   try {
      const user = await DB.User.create(req.body);
      const {id, username, profileImage, isAdmin} = user;
      const token = jwt.sign({id, username, profileImage, isAdmin}, process.env.SECRET_KEY);
      return res.status(200).json({id, username, profileImage, isAdmin, token});
   }
   catch (error){
      if(error.code === 11000){
         error.message = "Sorry, that username is unavailable";
      }
      
      error = createError(409, error.message);
      return next(error);
   }
};

exports.verifyToken = (req, res, next) => {
   const token = req.get("Authorization"),
         {SECRET_KEY} = process.env;
   
   if(!token){
      const error = createError(400, "Invalid/Expired Token");
      return next(error);
   }
   
   return jwt.verify(token, SECRET_KEY, (error, decoded) => {
             if(error){
                error = createError(400, "Invalid/Expired Token");
                return next(error);
             }
             
             return res.status(200).json(decoded); 
          });
};

module.exports = exports;