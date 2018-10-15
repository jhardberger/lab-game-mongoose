const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//db
require('./db/db');

//controller
const gamesController = require('./controllers/games');


//middleware
app.use(bodyParser.urlencoded({extended: false}));

app.use('/games', gamesController);

//test route
app.get('/', (req, res) => {
	res.render('index.ejs')
});

//listener
const post = 3000;
app.listen(post, () => {
	console.log('server is listening at ' + post);
})