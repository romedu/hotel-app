const router = require("express").Router(),
      helpers = require("../helpers/dailyQuote");

router.get("/", helpers.getQuote);

module.exports = router;