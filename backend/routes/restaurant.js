const express = require("express"),
      router  = express.Router(),
      helpers = require("../helpers/restaurant.js");
      
router.route("/")
    .get(helpers.findAll)
    .post(helpers.create);
    
router.route("/:id")
    .get(helpers.findOne)
    .patch(helpers.update)
    .delete(helpers.delete);
    
module.exports = router;