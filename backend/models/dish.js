const mongoose   = require("mongoose"),
      dishSchema = new mongoose.Schema({
          name: {
              type: String,
              required: true
          },
          image: {
              type: String,
              default: "https://t4.ftcdn.net/jpg/00/76/42/29/240_F_76422934_fVz8hjPLD0DjFnSUPgXsfzKDB6wmnWTJ.jpg"
          },
          description: {
              type: String,
              required: true
          },
          label: {
              type: String,
              default: "Main"
          },
          servedIn: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Restaurant"
          }
      });
      
module.exports = mongoose.model("Dish", dishSchema);