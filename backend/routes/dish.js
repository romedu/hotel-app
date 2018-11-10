const router  = require("express").Router({mergeParams: true}),
      helpers = require("../helpers/dish"),
      middleware = require("../middleware/restaurant"),
      {checkIfToken, checkIfAdmin} = require("../middleware");

router.route("/")
    .get(helpers.find)
    .post(checkIfToken, checkIfAdmin, middleware.checkIfRestaurant, helpers.create);
    
router.route("/:dishId")
    .get(helpers.findOne)
    .patch(checkIfToken, checkIfAdmin, helpers.update)
    .delete(checkIfToken, checkIfAdmin, middleware.checkIfRestaurant, helpers.delete);
    
module.exports = router;