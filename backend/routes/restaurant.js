const express    = require("express"),
      router     = express.Router(),
      helpers    = require("../helpers/restaurant.js"),
      middleware = require("../middleware"),
      resturantMiddleware = require("../middleware/restaurant");
      
router.route("/")
    .get(helpers.find)
    .post(middleware.checkIfToken, middleware.checkIfAdmin, helpers.create);
    
router.route("/:id")
    .get(helpers.findOne)
    .patch(middleware.checkIfToken, middleware.checkIfAdmin, helpers.update)
    .delete(middleware.checkIfToken, middleware.checkIfAdmin, helpers.delete);

//MAY BE UPDATED IN THE FUTURE, SO IT CAN SUPPORT ADDING A SPECIFIC RESERVATION TIME  
router.post("/:id/addReservation", middleware.checkIfToken, resturantMiddleware.checkIfReservation, helpers.addReservation);
router.post("/:id/removeReservation", middleware.checkIfToken, resturantMiddleware.checkIfNotReservation, helpers.removeReservation);
  
module.exports = router;