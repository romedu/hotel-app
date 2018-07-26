const router  = require("express").Router({mergeParams: true}),
      helpers = require("../helpers/dish");

router.route("/")
    .get(helpers.findAll)
    .post(helpers.create);
    
router.route("/:dishId")
    .get(helpers.findOne)
    .patch(helpers.update)
    .delete(helpers.delete);
    
module.exports = router;