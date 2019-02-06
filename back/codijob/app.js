'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var passport = require('passport');
require('./api/config/passport');

var app = express();

//MYSQL
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'codijob'
});
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conectado a la Base de Datos');
});
global.db = db;
//RUTAS
var rutas_skill = require('./api/routes/Skill');
var rutas_auth = require('./api/routes/Authentication');
//Cargando archivo de rutas
app.use(passport.initialize());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401);
      res.json({"message" : err.name + ": " + err.message});
    }
});



app.use('/api',rutas_skill);
app.use('/api',rutas_auth);

module.exports = app;
