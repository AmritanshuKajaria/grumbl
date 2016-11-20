// logout.js
var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user'); 

/* GET logout. */
router.get('/', function(req, res, next) {
	req.logout();
	req.redirect('/');
});

module.exports = router;
