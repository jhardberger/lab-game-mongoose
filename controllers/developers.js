const express = require('express');
const router = express.Router();
const Developers = require('../models/developers');
const Games = require('../models/games');

//routes

//index
router.get('/', (req, res) => {
	Developers.find({}, (err, foundDevelopers) => {
		res.render('developers/index.ejs', {
			developers: foundDevelopers
		});
	});
});

//new
router.get('/new', (req, res) => {
	res.render('developers/new.ejs')
});

//show
router.get('/:id', (req, res) => {
	Developers.findById(req.params.id, (err, foundDevelopers) => {
		res.render('developers/show.ejs', {
			developer: foundDevelopers
		});
	});
});

//edit route
router.get('/:id/edit', (req, res) => {
	Developers.findById(req.params.id, (err, editDevelopers) => {
		res.render('developers/edit.ejs', {
			developer: editDevelopers
		});
	});
});

//new post
router.post('/', (req, res) => {
	console.log(req.body);
	Developers.create(req.body, (err, newDevelopers) => {
		if(err){
			console.log(err);
		}else{
			console.log(newDevelopers);
		}
		res.redirect('/developers')
	});
});

//edit put
router.put('/:id', (req, res) => {
	Developers.findByIdAndUpdate(req.params.id, req.body, () => {
		res.redirect('/developers')	
	});
});

//delete route
router.delete('/:id', (req, res) => {
	Developers.findOneAndDelete(req.params.id, () => {
		res.redirect('/developers')
	});
});



//exp
module.exports = router;