const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (request, response, next) => {
	console.log('here is homepage');
	//  response.send('here is homepage');
	response.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (request, response, next) => {
	//  response.send('here is homepage');
	response.sendFile(__dirname + '/views/about.html');
});

app.get('/teachings', (request, response, next) => {
	console.log('here is homepage');
	//  response.send('here is homepage');
	response.sendFile(__dirname + '/views/teachings.html');
});

app.get('/quotes', (request, response, next) => {
	//  response.send('here is homepage');
	response.sendFile(__dirname + '/views/quotes.html');
});

app.get('/legacy', (request, response, next) => {
	//  response.send('here is homepage');
	response.sendFile(__dirname + '/views/legacy.html');
});

app.listen(3000, () => {
	console.log('server start listening!!');
});
