var express = require("express");
var router = express.Router();
var helpers = require('../helpers/auth');

router.post('/login', helpers.login);
router.post('/register', helpers.register);
router.get("/token/:token", helpers.verifyToken);

module.exports = router;
