const {Product} = require("../models");

exports.findEverySingleOne = (req, res) => {
    Product.find({})
        .then(allProducts =>  res.json({Products: allProducts}))
        .catch(error => res.json(error));
};

exports.findAll = (req, res) => {
    Product.find({kingdom: req.params.type})
        .then(products => res.json(products))
        .catch(error => res.json(error));
};

exports.create = (req, res) => {
    Product.create(req.body)
        .then(newProduct => {
            newProduct.kingdom = req.params.type;
            newProduct.save();
            return res.json(newProduct);
        })
        .catch(error => res.json(error));
};

exports.findOne = (req, res) => {
    Product.findById(req.params.id)
        .then(foundProduct => res.json(foundProduct))
        .catch(error => res.json(error));
};

exports.update = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(editedProduct => res.json(editedProduct))
        .catch(error => res.json(error));
};

exports.delete = (req, res) => {
    Product.findByIdAndRemove(req.params.id)
        .then(deletedProduct => Product.find({kingdom: deletedProduct.kingdom}))
        .then(products => res.json(products))
        .catch(error => res.json(error));
};

module.exports = exports;