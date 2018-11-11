const {Restaurant} = require("../models"),
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

exports.checkYourReservations = (req, res, next) => {
    const {user} = req;
    if(!user.reservation) next();
    next(createError(409, "Cancel your previous reservation to continue"));
};

module.exports = exports;