const express = require('express');
const app = express();

require('./db/db');

const post = 3000;
app.listen(post, () => {
	console.log('server is listening at ' + post);
})