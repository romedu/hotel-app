const {Restaurant, Dish} = require("../models");

exports.find = (req, res, next) => {
    Restaurant.find({})
        .then(restaurants => res.status(200).json(restaurants))
        .catch(error => next(error));
};

exports.create = (req, res, next) => {
    Restaurant.create(req.body)
        .then(newRestaurant => res.status(201).json(newRestaurant))
        .catch(error => next(error));
};

exports.findOne = (req, res, next) => {
    Restaurant.findById(req.params.id).populate("menu").exec()
        .then(restaurant => {
            if(!restaurant) throw new Error("Not Found");
            res.status(200).json(restaurant);
        })
        .catch(error => next(error));
};

exports.update = (req, res, next) => {
    Restaurant.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(editedRestaurant => res.json(editedRestaurant))
        .catch(error => next(error));
};

exports.delete = (req, res, next) => {
    Restaurant.findByIdAndRemove(req.params.id)
        .then(restaurant => {
            const {user} = req;
            Dish.deleteMany({servedIn: restaurant.id});
            if(user.reservation === req.params.id){
                user.reservation = null;
                return user.save();
            }
            else return;
        })
        .then(data => res.json({message: "Restaurant removed Successfully"}))
        .catch(error => next(error));
};

module.exports = exports;