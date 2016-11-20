// login.js
var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user'); 

/* GET login. */
router.get('/', function(req, res, next) {
	res.render('login', {title: 'login', user: req.user});
});

/* POST login. */
router.post('/', passport.authenticate('local'), function(req, res, next) {
	res.redirect('/');
});

module.exports = router;
