const router = require("express").Router(),
      helpers = require("../helpers/category"),
      middleware = require("../middleware");
      
router.route("/")
    .get(helpers.find)
    .post(middleware.checkIfToken,  middleware.checkIfStaff, helpers.create);
    
router.route("/:id")
    .get(helpers.findOne)
    .patch(middleware.checkIfToken,  middleware.checkIfStaff, helpers.update)
    .delete(middleware.checkIfToken,  middleware.checkIfStaff, helpers.delete);
    
module.exports = router;