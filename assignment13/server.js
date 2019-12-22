const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const port = 5000;

const mongoDBpath = 'mongodb+srv://aartidalvi:mongodbpwd@cluster0-ne0fo.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect (mongoDBpath, { useUnifiedTopology: true , useNewUrlParser: true } ,(error) => {
    console.log("Error connecting to the databse: " + error);
})

var server = app.listen(port, () => {
    console.log('Server running on port: ' + port);
});