
var express = require('express');
var AuthenticationController = require('../controllers/Authentication');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: '123',
  userProperty: 'payload'
});

router.post('/register',AuthenticationController.register);
router.get('/getUserInfo',auth,AuthenticationController.getUserInfo);

module.exports = router;
