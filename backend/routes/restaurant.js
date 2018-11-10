const express    = require("express"),
      router     = express.Router(),
      helpers    = require("../helpers/restaurant.js"),
      middleware = require("../middleware");
      
router.route("/")
    .get(helpers.find)
    .post(middleware.checkIfToken, middleware.checkIfAdmin, helpers.create);
    
router.route("/:id")
    .get(helpers.findOne)
    .patch(middleware.checkIfToken, middleware.checkIfAdmin, helpers.update)
    .delete(middleware.checkIfToken, middleware.checkIfAdmin, helpers.delete);
    
module.exports = router;