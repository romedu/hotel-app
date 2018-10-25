const {Category, Product} = require("../models"),
      {createError}       = require("../helpers/error");

exports.find = (req, res, next) => {
    Category.find({})
        .then(categories => {
            if(!categories) throw createError(404, "Not Found");
            return res.status(200).json(categories);
        })
        .catch(error => next(error));
};

exports.create = (req, res, next) => {
    Category.create(req.body)
        .then(newCategory => res.status(201).json(newCategory))
        .catch(error => next(error));
};

exports.findOne = (req, res, next) => {
    Category.findById(req.params.id).populate("products").exec()
        .then(category => {
            if(!category) throw createError(404, "Not Found");
            res.status(200).json(category);
        })
        .catch(error => next(error));
};

exports.update = (req, res, next) => {
    Category.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(editedCategory => res.status(201).json(editedCategory))
        .catch(error => next(error));
};

exports.delete = (req, res, next) => {
    Category.findByIdAndRemove(req.params.id)
        .then(exCategory => Product.deleteMany({category: req.params.id}))
        .then(resolve => res.status(201).json({message: "The category and it's products were removed successfully"}))
        .catch(error => next(error));
};


module.exports = exports;