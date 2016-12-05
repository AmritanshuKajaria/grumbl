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
	Post.aggregate()
		.project({
			"ups": 1,
			"downs": 1,
			"username": 1,
			"department": 1,
			"time": 1,
			"content": 1,
			"points": { "$add": ["$ups", "$downs"]}
		})
		.match(query)
		.sort({'points': -1})
		.exec(function(err, posts){
			res.render('index', { 'title': title, 'posts': posts, user: req.user });
		});
});

module.exports = router;
