const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const developerSchema = new Schema({
	name: {type: String, required: true},
	founded: {type: Number, required: true},
	country: String,
	games: [String]
});

module.exports = mongoose.model('Developer', developerSchema);