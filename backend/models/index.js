const mongoose = require("mongoose"),
      User     = require("./user");
        
mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/hotel-app");
mongoose.Promise = Promise;

exports.User = User;

module.exports = exports;