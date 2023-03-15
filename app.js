const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res, next) => {
	res.sendFile(__dirname + '/views/home.html');
});

app.get('/philosophy', (req, res, next) => {
	res.sendFile(__dirname + '/views/philosophy.html');
});

app.get('/teachings', (req, res, next) => {
	res.sendFile(__dirname + '/views/teachings.html');
});

app.get('/quotes', (req, res, next) => {
	res.sendFile(__dirname + '/views/quotes.html');
});

app.get('/legacy', (req, res, next) => {
	res.sendFile(__dirname + '/views/legacy.html');
});

app.listen(3000, () => {
	console.log('Server listening on port 3000');
});
