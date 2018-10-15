const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
	name: {type: String, required: true},
	developer: {type: String, required: true},
	year: Date
});

module.exports = mongoose.model('Game', gameSchema);