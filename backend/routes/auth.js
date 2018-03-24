var express = require("express");
var router = express.Router();
var helpers = require('../helpers/auth');

router.post('/login', helpers.login);
router.post('/register', helpers.register);

module.exports = router;
