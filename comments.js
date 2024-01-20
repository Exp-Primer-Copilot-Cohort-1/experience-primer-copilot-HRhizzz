// Create web server
// Create web server with express.js
const express = require('express');
const app = express();
const port = 5000;
// Create body parser
const bodyParser = require('body-parser');
// Use body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// Create mongoose
const mongoose = require('mongoose');
// Connect to database
mongoose.connect('mongodb://localhost:27017/mean-blog', {useNewUrlParser: true});
// Create schema
const Schema = mongoose.Schema;
const commentSchema = new Schema({    // Add your schema properties here
});
