// db.js
var mongoose = require('mongoose');
var moment = require('moment');

var Comment = new mongoose.Schema({
	username: String,
	content: String,
	time: {type: Date, default: moment().toISOString()},
	ups: Number,
	downs: Number
});
var Post = new mongoose.Schema({
	username: String,
	content: String,
	comments: [Comment],
	time: {type: Date, default: moment().toISOString()},
	ups: Number,
	downs: Number
});

mongoose.model('Post', Post);

mongoose.connect('mongodb://localhost/grumble');
