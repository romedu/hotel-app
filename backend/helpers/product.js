const {Product} = require("../models"),
      {createError} = require("./error");

exports.find = (req, res, next) => {
    const searchQuery = req.query.all ? {} : {category: req.params.id};
    
    Product.find(searchQuery)
        .then(products => {
            if(!products) throw createError(404, "Not Found");
            return res.status(200).json(products);
        })
        .catch(error => next(error));
};

exports.create = (req, res, next) => {
    Product.create(req.body)
        .then(newProduct => {
            const {category} = req;
            category.products.push(newProduct._id);
            newProduct.category = category._id;
            return Promise.all([newProduct, category.save(), newProduct.save()]);
        })
        .then(response => res.status(201).json(response[0]))
        .catch(error => {
            if(!error.status) error.status = 409;
            next(error);
        });
};

exports.findOne = (req, res, next) => {
    Product.findById(req.params.productId).populate("category").exec()
        .then(foundProduct => {
            if(!foundProduct) throw createError(404, "Not Found");
            res.status(200).json(foundProduct);
        })
        .catch(error => next(error));
};

exports.update = (req, res, next) => {
    Product.findByIdAndUpdate(req.params.productId, req.body, {new: true})
        .then(editedProduct => res.json(editedProduct))
        .catch(error => next(error));
};

exports.delete = (req, res, next) => {
    Product.findByIdAndRemove(req.params.productId)
        .then(exProduct => {
            const {category} = req;
            category.products.pull(req.params.id);
            return category.save();
        })
        .then(response => res.json({message: "Product removed successfully"}))
        .catch(error => next(error));
};

module.exports = exports;