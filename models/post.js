var mongoose = require('mongoose');
var moment = require('moment');
var Schema = mongoose.Schema;

var Comment = new Schema({
	username: String,
	content: String,
	time: {type: Date, default: moment().toISOString()},
	ups: Number,
	downs: Number
});
var Post = new Schema({
	username: String,
	content: String,
	department: String,
	comments: [Comment],
	time: {type: Date, default: moment().toISOString()},
	ups: Number,
	downs: Number
});


module.exports = {
	Post: mongoose.model('Post', Post),
	Comment: mongoose.model('Comment', Comment)
}
