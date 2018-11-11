const {Restaurant, Dish} = require("../models"),
      {createError} = require("./error");

exports.find = (req, res, next) => {
    Restaurant.find({})
        .then(restaurants => {
            if(!restaurants) throw createError(404, "Not Found");
            return res.status(200).json(restaurants);
        })    
        .catch(error => next(error));
};

exports.create = (req, res, next) => {
    Restaurant.create(req.body)
        .then(newRestaurant => res.status(201).json(newRestaurant))
        .catch(error => {
            error.status = 400;
            next(error);
        });
};

exports.findOne = (req, res, next) => {
    Restaurant.findById(req.params.id).populate("menu").exec()
        .then(restaurant => {
            if(!restaurant) throw createError(404, "Not Found");
            res.status(200).json(restaurant);
        })
        .catch(error => next(error));
};

exports.update = (req, res, next) => {
    Restaurant.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(editedRestaurant => res.status(200).json(editedRestaurant))
        .catch(error => {
            error.status = 409;
            next(error);
        });
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
        .then(data => res.status(200).json({message: "Restaurant removed Successfully"}))
        .catch(error => next(error));
};

module.exports = exports;