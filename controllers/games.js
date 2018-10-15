const express = require('express');
const router = express.Router();
const Games = require('../models/games');

//routes

//index
router.get('/', (req, res) => {
	res.render('index.ejs') //pass model here
});


//new
router.get('/new', (req, res) => {
	res.render('new.ejs')
});




//exp
module.exports = router;