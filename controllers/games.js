const express = require('express');
const router = express.Router();
const Games = require('../models/games');
const Developer = require('../models/developers');

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
	Developer.find({}, (err, foundDevs) => {
		console.log('found devs here: ' + foundDevs);
		res.render('games/new.ejs', {
			developers: foundDevs
		});
	});
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
	Games.create(req.body, (err, newGame) => {
		if(err){
			console.log(err);
		}else{
			console.log(newGame);
			res.redirect('/games')
		}
			
		Developer.findOneAndUpdate({name: req.body.developer}, (err, foundDev) => {
			if(err){
				console.log(err)
			}else{
				foundDev.games.push(req.body)
				console.log(foundDev);
				console.log('=====================')
			}
		});
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
	Games.findByIdAndRemove(req.params.id, () => {
		res.redirect('/games')
	});
});

//test zone

// const developer1 = new Developer({
// 	name: 'Nintendo',
// 	founded: 1889
// });

// const game1 = new Game({
// 	name: 'Smash bros',
// 	developer: developer1.name
// });

// developer1.games.push(game1);

// game1.save();
// developer1.save();

// console.log(developer1);


//exp
module.exports = router;