var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Post = require('../models/post.js').Post;

/* GET home page. */
router.get('/', function(req, res, next) {
	Post.find( function(err, posts, count) {	
		if( err ) { res.send(err); }
		res.render('index', { title: 'Grumble', 'posts': posts });
	});
});

module.exports = router;
