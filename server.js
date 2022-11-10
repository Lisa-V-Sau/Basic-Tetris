// Check whether mongodb is running
// NOTE! this has to run before all other server and db functions 
// require('dotenv').config();
const dotenv = require('dotenv');
if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
};


// To set up the server we need to require it and assign it to a variable

const express = require("express");
const ejs = require("ejs");
const server = express();

// Express also renders html, and to do that we need to specify it, but because we are not using ejs to render,
// instead we are using  html, therefore we need to specify the folder which holds our html files
// we then use ejs to render the file type
server.use(express.static(__dirname + "/views"));

// Because we have specified the folder type, we can then locate file name by passing through the file name type
// and in our case, all the logic is tied into the index.html file 
server.set("view engine", "html");
server.engine("html", ejs.renderFile);
server.get("/", (req, res) => {
    res.render("index")
})

// This is a standard approach to setting up the server
const port = process.env.PORT || 3000;
// If it is not running on production envrionment, then it will default to port 3000
server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});

// Initial setup of the Database
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
console.log(process.env.DATABASE_URL);

const db = mongoose.connection
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to Mongoose'));