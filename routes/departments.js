var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Post = require('../models/post.js').Post;

/* GET departments filtering. */
router.get('/', function(req, res, next) {
	res.render('departments', {title: 'Departments'});
});

module.exports = router;
