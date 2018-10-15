const express = require('express');
const app = express();

//db
require('./db/db');

//controller
const gamesController = require('./controllers/games');
app.use('/games', gamesController);

//middleware

//test route
app.get('/', (req, res) => {
	res.render('index.ejs')
});

//listener
const post = 3000;
app.listen(post, () => {
	console.log('server is listening at ' + post);
})