// register.js
var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user'); 

/* GET register. */
router.get('/', function(req, res, next) {
	res.render('register', {title: 'register'});
});

/* POST register. */
router.post('/', function(req, res, next) {
	User.register(new User({username: req.body.username}), req.body.password, function(err, user) {
		if( err ) {
			return res.render('register', {user: user});
		}

		passport.authenticate('local')(req, res, function() {
			res.redirect('/');
		});
	});
});

module.exports = router;
