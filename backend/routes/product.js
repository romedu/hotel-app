const express    = require("express"),
      router     = express.Router(),
      helpers    = require("../helpers/product"),
      middleware = require("../middleware"),
      {checkIfCategory} = require("../middleware/category");
      
router.route("/")
    .get(helpers.find)
    .post(middleware.checkIfToken, middleware.checkIfAdmin, checkIfCategory, helpers.create);
    
router.route("/:productId")
    .get(helpers.findOne)
    .patch(middleware.checkIfToken, middleware.checkIfAdmin, helpers.update)
    .delete(middleware.checkIfToken, middleware.checkIfAdmin, checkIfCategory, helpers.delete);
    
module.exports = router;