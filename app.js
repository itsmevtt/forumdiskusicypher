var express = require('express');
var path = require('path');
var router = express.Router();
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var routes = require('./routes');
var mysql = require('mysql');
//var router = express.Router();
var session;
var app = express();
app.set('view engine', 'ejs');
//path
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
//bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//link


//call css
app.use(express.static(__dirname + '/views'));

//call js
app.locals.scripts = [];
app.locals.addScripts=function (all) {
    app.locals.scripts = [];
    if (all != undefined) {
        return all.map(function(script) {
            return "<script src='/assets/js/" + script + "'></script>";
        }).join('\n ');
    }
    else {
        return '';
    }
};
app.locals.getScripts = function(req, res) {
    return scripts;
};


/*app.use(function(req, res, next) {
  var err =  new Error('Not Found');
  err.status = 404;
  next(err);
});
*/

//session
app.use(session({
    secret:'askfhla09013*&*afdajfa#',
    resave:false,
    saveUninitialized:true
}));

//link
app.get('/home',function(req,res){
    res.render('home');
});

app.get('/discuss',function(req,res){
    res.render('discuss');
});

app.get('/signup',function(req,res){
    res.render('signup');
});

app.get('/', routes.home);
app.get('/index', routes.save);
app.get('/signup/add', routes.signup);

app.listen('8000', routes.listen);

module.exports = app;
module.exports = routes;