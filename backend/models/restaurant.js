const mongoose         = require("mongoose"),
      restaurantSchema = new mongoose.Schema({
          name: {
              type: String,
              required: true
          },
          image: {
              type: String,
              required: true
          },
          description: {
              type: String,
              required: true
          },
          menu: [{
              type: mongoose.Schema.Types.ObjectId,
              ref: "Dish"
          }],
          reservationLimit: {
              type: Number,
              min: 1
          },
          reservations: [{
              type: mongoose.Schema.Types.ObjectId,
              ref: "User"
          }]
      });
      
module.exports = mongoose.model("Restaurant", restaurantSchema);