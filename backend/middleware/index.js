var jwt = require('jsonwebtoken'),
    {createError} = require("../helpers/error");

exports.checkIfToken = (req, res, next) => {
    const token = req.get("Authorization"),
          {SECRET_KEY} = process.env;
    
    if(!token){
        const error = new Error("A valid token is required");
        return next(error);
    }
    
    return jwt.verify(token, SECRET_KEY, (error, decoded) => {
               if(error) return next(error);
               req.user = decoded;
               next(); 
           });
};

exports.checkIfStaff = (req, res, next) => {
    if(req.user.staff) return next();
    const error = createError(401, "Not authorized to proceed");
    next(error);
};

exports.sanitizeBody = (req, res, next) => {
    if(!req.body) next();
    
    for(const field in req.body){
        req.body[field] = req.sanitize(req.body[field]);
    }
    
    next();
};

module.exports = exports;