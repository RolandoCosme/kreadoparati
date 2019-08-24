var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);
var router = express.Router();
var logger = require('morgan');
var nodemailer = require('nodemailer');
var Mailgun = require('mailgun').Mailgun;

var PORT = process.env.NODE_ENV || 8080;


app.use(logger ( 'dev' ));
// app.use('/', router);
// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '/public')));

app.listen(PORT, function(){
  console.log("Listening on " + PORT);
});