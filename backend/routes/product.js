const express    = require("express"),
      router     = express.Router(),
      helpers    = require("../helpers/product"),
      middleware = require("../middleware"),
      {checkIfCategory} = require("../middleware/category");
      
router.route("/")
    .get(helpers.find)
    .post(middleware.checkIfToken, middleware.checkIfStaff, checkIfCategory, helpers.create);
    
router.route("/:productId")
    .get(helpers.findOne)
    .patch(middleware.checkIfToken, middleware.checkIfStaff, helpers.update)
    .delete(middleware.checkIfToken, middleware.checkIfStaff, checkIfCategory, helpers.delete);
    
module.exports = router;