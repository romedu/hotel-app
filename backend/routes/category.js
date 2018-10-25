const router = require("express").router(),
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