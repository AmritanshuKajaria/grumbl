var express = require('express');
var router = express.Router();
require('../db.js');
var mongoose = require('mongoose');
var Post = mongoose.model('Post');


/* POST new post. */
router.post('/', function(req, res, next) {
	var post = new Post({
		username: req.body.username,
		content: req.body.content,
		ups: 0,
		downs: 0
	});
	post.save(function(err, post, count) {
		if( err ) { res.send(err); }
		res.redirect('/');
	});
});

module.exports = router;
