const mongoose      = require("mongoose"),
      productSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category"
        },
        image: String,
        icon: String,
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            default: 0
        },
        exclusiveOnly: {
            type: Boolean,
            default: false
        }
      });
      
module.exports = mongoose.model("Product", productSchema);