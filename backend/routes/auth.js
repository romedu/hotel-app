const express = require("express"),
      router = express.Router(),
      helpers = require('../helpers/auth'),
      middleware = require("../middleware");

router.post('/login', helpers.login);
router.post('/register', middleware.checkAdminPassword, helpers.register);
router.get("/token", middleware.checkIfToken, helpers.verifyToken);

module.exports = router;