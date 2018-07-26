const express   = require("express"),
      router    = express.Router(),
      helpers   = require("../helpers/product");
      
router.get("/", helpers.findEverySingleOne);
      
router.route("/:type")
    .get(helpers.findAll)
    .post(helpers.create);
    
router.route("/:type/:id")
    .get(helpers.findOne)
    .patch(helpers.update)
    .delete(helpers.delete);
    
module.exports= router;