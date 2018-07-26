const {Restaurant, Dish} = require("../models");

exports.findAll = (req, res) => {
    Dish.find({servedIn: req.params.id})
        .then(dishes => res.json(dishes))
        .catch(error => res.json(error));
};

exports.create = (req, res) => {
    Dish.create(req.body)
        .then(newDish => {
            Restaurant.findById(req.params.id)
                .then(restaurant => {
                    restaurant.menu.push(newDish);
                    let savedRestaurant = restaurant.save();
                    newDish.servedIn = restaurant.id;
                    let savedDish = newDish.save();
                    return Promise.all([savedRestaurant, savedDish]);
                })
                .then(data => res.json(newDish))
                .catch(error => res.json(error));
        })
        .catch(error => res.json(error));
};

exports.findOne = (req, res) => {
    Dish.findById(req.params.dishId)
        .then(dish => res.json(dish))
        .catch(error => res.json(error));
};

exports.update = (req, res) => {
    Dish.findByIdAndUpdate(req.params.dishId, req.body, {new: true})
        .then(dish => res.json(dish))
        .catch(error => res.json(error));
};

exports.delete = (req, res) => {
    Restaurant.findById(req.params.id)
        .then(restaurant => {
            Dish.findByIdAndRemove(req.params.dishId)
                .then(exDish => {
                    restaurant.menu.pull(exDish.id);
                    restaurant.save();
                    return Dish.find({servedIn: req.params.id});
                })
                .then(dishes => res.json(dishes))
                .catch(error => res.json(error));
        })
        .catch(error => res.json(error));
};

module.exports = exports;