const axios = require("axios"),
      {DailyQuote} = require("../models"),
      {createError} = require("./error");

exports.getQuote = async (req, res, next) => {
   let dailyQuote = await DailyQuote.find({});

   //THIS IS TO CHECK WHETHER IT NEEDS TO BE EITHER CREATED OR UPDATED
   if(!dailyQuote[0]){
      dailyQuote = await getNewQuote();
   }
   else {
      dailyQuote = dailyQuote[0];
      const currentDate = new Date().getDate(),
            quoteDate = new Date(dailyQuote.updatedAt || dailyQuote.createdAt).getDate();

      if(currentDate > quoteDate) dailyQuote = await getNewQuote(dailyQuote._id);
   }

   //ERROR HANDLER
   if(!dailyQuote){
      const error = createError(404, "Not Found");
      return next(error);
   }

   return res.status(200).json(dailyQuote);
};

const getNewQuote = quoteId => {
   return axios.get("http://quotes.rest/qod.json?category=inspire")
            .then(response => response.data)
            .then(quoteData => {
               const {quote, author} = quoteData.contents.quotes[0];
               if(quoteId) return DailyQuote.findByIdAndUpdate(quoteId, {quote, author}, {new: true});
               else return DailyQuote.create({quote, author});
            })
            .catch(error => {
               error = createError(400, error.message);
               next(error);
            })
}

module.exports = exports;