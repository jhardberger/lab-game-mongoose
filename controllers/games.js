const express = require('express');
const router = express.Router();
const Games = require('../models/games');

//routes

//index
router.get('/', (req, res) => {
	Games.find({}, (err, foundGames) => {
		res.render('index.ejs', {
			games: foundGames
		});
	});
});


//new
router.get('/new', (req, res) => {
	res.render('new.ejs')
});

//new post
router.post('/', (req, res) => {
	console.log(req.body);
	Games.create(req.body, (err, newGame) => {
		if(err){
			console.log(err);
		}else{
			console.log(newGame);
		}
		res.redirect('/games')
	});
});



//exp
module.exports = router;