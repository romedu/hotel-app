const express = require("express"),
      router = express.Router(),
      helpers = require('../helpers/auth');

router.post('/login', helpers.login);
router.post('/register', helpers.register);
router.get("/token", helpers.verifyToken);

module.exports = router;