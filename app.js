const express = require("express");

const app = express();

app.use(express.static('public'));

app.get("/", (request, response, next) => {
    console.log("here is homepage");
    //  response.send('here is homepage');
    response.sendFile(__dirname + '/views/home.html');
})

app.get("/about", (request, response, next) => {
    //  response.send('here is homepage');
    response.sendFile(__dirname + '/views/about.html');
})

app.get("/photo-gallery", (request, response, next) => {
    console.log("here is homepage");
    //  response.send('here is homepage');
    response.sendFile(__dirname + '/views/photo-gallery.html');
})

app.get("/works", (request, response, next) => {

    //  response.send('here is homepage');
    response.sendFile(__dirname + '/views/works.html');
})



app.listen(3000, () => {
    console.log("server start listening!!");
})