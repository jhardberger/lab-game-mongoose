const express = require('express');
const router = express.Router();
const Games = require('../models/games');

//routes

//index
router.get('/', (req, res) => {
	Games.find({}, (err, foundGames) => {
		res.render('games/index.ejs', {
			games: foundGames
		});
	});
});

//new
router.get('/new', (req, res) => {
	res.render('games/new.ejs')
});

//show
router.get('/:id', (req, res) => {
	Games.findById(req.params.id, (err, foundGame) => {
		res.render('games/show.ejs', {
			game: foundGame
		});
	});
});

//edit route
router.get('/:id/edit', (req, res) => {
	Games.findById(req.params.id, (err, editGame) => {
		res.render('games/edit.ejs', {
			game: editGame
		});
	});
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

//edit put
router.put('/:id', (req, res) => {
	Games.findByIdAndUpdate(req.params.id, req.body, () => {
		res.redirect('/games')	
	});
});

//delete route
router.delete('/:id', (req, res) => {
	Games.findOneAndDelete(req.params.id, () => {
		res.redirect('/games')
	});
});



//exp
module.exports = router;