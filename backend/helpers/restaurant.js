const {Restaurant, Dish} = require("../models");

exports.findAll = (req, res) => {
    Restaurant.find({})
        .then(restaurants => res.json(restaurants))
        .catch(error => res.json(error));
};

exports.create = (req, res) => {
    Restaurant.create(req.body)
        .then(newRestaurant => res.json(newRestaurant))
        .catch(error => res.json(error));
};

exports.findOne = (req, res) => {
    Restaurant.findById(req.params.id).populate("menu").exec()
        .then(restaurant => res.json(restaurant))
        .catch(error => error);
};

exports.update = (req, res) => {
    Restaurant.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(restaurant => res.json(restaurant))
        .catch(error => res.json(error));
};

exports.delete = (req, res) => {
    Restaurant.findByIdAndRemove(req.params.id)
        .then(restaurant => Dish.remove({servedIn: restaurant.id}))
        .then(data => Restaurant.find({}))
        .then(restaurants => res.json(restaurants))
        .catch(error => res.json(error));
};

module.exports = exports;