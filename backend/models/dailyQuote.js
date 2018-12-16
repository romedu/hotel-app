const mongoose = require("mongoose"),
      dailyQuoteSchema = new mongoose.Schema({
         quote: {
            type: String,
            required: true
         },
         author: {
            type: String,
            required: true
         }
      }, {timestamps: {createdAt: 'createdAt', updatedAt: "updatedAt"}});

module.exports = mongoose.model("DailyQuote", dailyQuoteSchema);