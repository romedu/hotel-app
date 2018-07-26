const mongoose         = require("mongoose"),
      restaurantSchema = new mongoose.Schema({
          name: {
              type: String,
              required: true
          },
          description: {
              type: String,
              default: ""
          },
          image: {
              type: String,
              required: true
          },
          menu: [{
              type: mongoose.Schema.Types.ObjectId,
              ref: "Dish"
          }]
      });
      
module.exports = mongoose.model("Restaurant", restaurantSchema);