var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = Schema({
	username: String,
	password: String,
	email: String
});

module.exports = {
	User: mongoose.model('User', User)
}
