const router  = require("express").Router({mergeParams: true}),
      helpers = require("../helpers/dish"),
      middleware = require("../middleware/restaurant"),
      {checkIfToken, checkIfStaff} = require("../middleware");

router.route("/")
    .get(helpers.find)
    .post(checkIfToken, checkIfStaff, middleware.checkIfRestaurant, helpers.create);
    
router.route("/:dishId")
    .get(helpers.findOne)
    .patch(checkIfToken, checkIfStaff, helpers.update)
    .delete(checkIfToken, checkIfStaff, middleware.checkIfRestaurant, helpers.delete);
    
module.exports = router;