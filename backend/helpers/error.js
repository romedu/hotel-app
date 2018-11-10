exports.createError = (status, message) => {
   const error = new Error(message);
   error.status = status;
   return error;
};

exports.errorHandler = (error, req, res, next) => {
   const {status, message} = error;
   if(!status) error.status = 500;
   return res.status(status).json({status, message});
};

module.exports = exports;