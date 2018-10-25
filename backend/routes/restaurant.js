const express    = require("express"),
      router     = express.Router(),
      helpers    = require("../helpers/restaurant.js"),
      middleware = require("../middleware");
      
router.route("/")
    .get(helpers.find)
    .post(middleware.checkIfToken, middleware.checkIfStaff, helpers.create);
    
router.route("/:id")
    .get(helpers.findOne)
    .patch(middleware.checkIfToken, middleware.checkIfStaff, helpers.update)
    .delete(middleware.checkIfToken, middleware.checkIfStaff, helpers.delete);
    
module.exports = router;