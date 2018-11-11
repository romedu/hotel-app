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
            const {user} = req,
                  addons = [Dish.deleteMany({servedIn: restaurant.id})];
            
            if(user.reservation === req.params.id){
                user.reservation = null;
                addons.push(user.save());
            }
            
            return Promise.all(addons);
        })
        .then(data => res.status(200).json({message: "Restaurant removed Successfully"}))
        .catch(error => next(error));
};

exports.addReservation = (req, res, next) => {
    Restaurant.findById(req.params.id)
        .then(restaurant => {
            const {user} = req,
                  {reservations, reservationLimit} = restaurant;
                  
            if(reservations.length >= reservationLimit) throw createError(409, "No more reservations available");
            
            restaurant.reservations.push(user.id);
            user.reservation = restaurant.id;
            return Promise.all([restaurant.save(), user.save()]);
        })
        .then(resolve => res.status(200).json({message: "Your reservation has been completed successfully"}))
        .catch(error => next(error));
};

module.exports = exports;