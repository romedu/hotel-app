const {Restaurant, User} = require("../models"),
      {createError} = require("../helpers/error");

exports.checkIfRestaurant = (req, res, next) => {
    Restaurant.findById(req.params.id)
        .then(foundRestaurant => {
            if(!foundRestaurant) throw createError(404, "Not Found");
            req.restaurant = foundRestaurant;
            next();
        })
        .catch(error => next(error));
};

exports.checkIfReservation = (req, res, next) => {
    User.findById(req.user._id)
        .then(user => {
            if(!user) throw createError(404, "Not Found");
            if(!user.reservation){
                req.user = user;
                return next();
            }
            return next(createError(409, "Cancel your current reservation to continue"));
        })
        .catch(error => next(error));
};

exports.checkIfNotReservation = (req, res, next) => {
    User.findById(req.user._id)
        .then(user => {
            if(!user) throw createError(404, "Not Found");
            if(user.reservation){
                req.user = user;
                return next();
            }
            return next(createError(409, "You don't have any reservation"));
        })
        .catch(error => next(error));
};

module.exports = exports;