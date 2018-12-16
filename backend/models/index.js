const mongoose = require("mongoose");
        
mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/hotel-app", {useNewUrlParser: true});
mongoose.Promise = Promise;

exports.User       = require("./user");
exports.Product    = require("./product");
exports.Restaurant = require("./restaurant");
exports.Dish       = require("./dish");
exports.Category   = require("./category");
exports.DailyQuote = require("./dailyQuote");

module.exports = exports;