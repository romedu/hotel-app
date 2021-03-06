var jwt = require('jsonwebtoken'),
    {createError} = require("../helpers/error");

exports.checkAdminPassword = (req, res, next) => {
    const {ADMIN_KEY} = process.env,
          {body} = req;
    
    if(body.isAdmin){
        if(body.adminPassword === ADMIN_KEY) return next();
        else {
            const error = createError(401, "Incorrect Admin's password");
            return next(error);
        }
    }
    return next();
};

exports.checkIfToken = (req, res, next) => {
    const token = req.get("Authorization"),
          {SECRET_KEY} = process.env;
    
    if(!token){
        const error = createError(400, "A valid token is required");
        return next(error);
    }
    
    return jwt.verify(token, SECRET_KEY, (error, decoded) => {
               if(error){
                  error = createError(400, "Invalid/Expired Token");
                  return next(error);
               }
               req.user = decoded;
               next(); 
           });
};

exports.checkIfAdmin = (req, res, next) => {
    if(req.user.isAdmin) return next();
    const error = createError(401, "Not authorized to proceed");
    return next(error);
};

exports.sanitizeBody = (req, res, next) => {
    if(!req.body) next();
    
    for(const field in req.body){
        req.body[field] = req.sanitize(req.body[field]);
    }
    return next();
};

module.exports = exports;