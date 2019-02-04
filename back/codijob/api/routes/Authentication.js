
var express = require('express');
var AuthenticationController = require('../controllers/Authentication');
var router = express.Router();

router.post('/register',AuthenticationController.register);


module.exports = router;
