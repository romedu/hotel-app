const mongoose = require("mongoose");
        
mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/hotel-app");
mongoose.Promise = Promise;

exports.User       = require("./user");
exports.Product    = require("./product");
exports.Restaurant = require("./restaurant");
exports.Dish       = require("./dish");

module.exports = exports;