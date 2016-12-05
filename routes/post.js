var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Post = require('../models/post.js').Post;


/* POST new post. */
router.post('/', function(req, res, next) {
	var post = new Post({
		username: req.body.username,
		content: req.body.content,
		department: req.body.department,
		ups: 0,
		downs: 0
	});
	post.save(function(err, post, count) {
		if( err ) { res.send(err); }
		res.redirect('/');
	});
});

/* POST up id. */
router.post('/up', function(req, res, next) {
	Post.findOneAndUpdate({_id: req.body.id}, {$inc:{ups:1}}, function(err, post) {
		if( err ) { res.send(err); }
		res.redirect('/');
	});
});

/* POST down id. */
router.post('/down', function(req, res, next) {
	Post.findOneAndUpdate({_id: req.body.id}, {$inc:{downs:-1}}, function(err, post) {
		if( err ) { res.send(err); }
		res.redirect('/');
	});
});

module.exports = router;
