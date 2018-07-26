const mongoose      = require("mongoose"),
      productSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        kingdom: {
            type: String
        },
        image: {
            type: String,
            required: true
        }
      });
      
module.exports = mongoose.model("Product", productSchema);