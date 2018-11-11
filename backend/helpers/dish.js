const {Dish} = require("../models");

exports.find = (req, res, next) => {
    Dish.find({servedIn: req.params.id})
        .then(dishes => res.status(200).json(dishes))
        .catch(error => next(error));
};

exports.create = (req, res, next) => {
    Dish.create(req.body)
        .then(newDish => {
            const {restaurant} = req;
            restaurant.menu.push(newDish);
            newDish.servedIn = restaurant._id;
            return Promise.all([newDish, restaurant.save(), newDish.save()]);
        })
        .then(resolve => res.status(201).json(resolve[0]))
        .catch(error => {
            error.status = 400; 
            return next(error);
        });
};

exports.findOne = (req, res, next) => {
    Dish.findById(req.params.dishId)
        .then(dish => res.status(200).json(dish))
        .catch(error => next(error));
};

exports.update = (req, res, next) => {
    Dish.findByIdAndUpdate(req.params.dishId, req.body, {new: true})
        .then(editDish => res.status(204).json(editDish))
        .catch(error => {
            error.status = 409; 
            return next(error);
        });
};

exports.delete = (req, res, next) => {
    Dish.findByIdAndRemove(req.params.dishId)
        .then(exDish => {
            const {restaurant} = req;
            restaurant.menu.pull(exDish.id);
            return restaurant.save();
        })
        .then(resolve => res.status(204).json({message: "Dish removed successfully"}))
        .catch(error => next(error));
};

module.exports = exports;