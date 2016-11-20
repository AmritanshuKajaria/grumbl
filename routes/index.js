var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Post = require('../models/post.js').Post;

/* GET home page. */
router.get('/', function(req, res, next) {
	var title = 'Grumble';
	var query = {};
	if( req.query && req.query.department )
		query = { department: req.query.department };
	Post.find( query, function(err, posts, count) {	
		if( err ) { res.send(err); }
		res.render('index', { 'title': title, 'posts': posts, user: req.user });
	});
});

module.exports = router;
