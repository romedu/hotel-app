exports.createError = (status, message) => {
   const error = new Error(message);
   error.status = status;
   return error;
};

exports.errorHandler = (error, request, response, next) => {
   const {status, message} = error;
   return response.status(status || 500).json({
         message: message || "Oops! Something went wrong."
   });
};

module.exports = exports;