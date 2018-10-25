const {Category} = require("../model"),
      {createError} = require("../helpers/error");

exports.checkIfCategory = (req, res, next) => {
    Category.findById(req.params.id)
        .then(category => {
            if(!category) throw createError(404, "Not Found");
            req.category = category;
            next();
        })
        .catch(error => next(error));
};

module.exports = exports;