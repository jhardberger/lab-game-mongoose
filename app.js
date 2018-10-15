const express = require('express');
const app = express();
//db
require('./db/db');

//middleware

//test route
app.get('/', (req, res) => {
	res.send('welcome to the game')
});

//listener
const post = 3000;
app.listen(post, () => {
	console.log('server is listening at ' + post);
})