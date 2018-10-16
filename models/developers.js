const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Games = require('./games');

const developerSchema = new Schema({
	name: {type: String, required: true},
	founded: {type: Number, required: true},
	country: String,
	games: [Games.schema]
});

module.exports = mongoose.model('Developer', developerSchema);