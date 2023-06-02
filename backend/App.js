//'use strict'

var express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//carpetas
var routesMetrics = require('./routes/routesMetrics');
var routesAlarms = require('./routes/routesAlarms');
var routesDetailsAlarms = require('./routes/routesDetailsAlarms');
//rutas
app.use('/metrics',routesMetrics);
app.use('/alarms',routesAlarms);
app.use('/details-alarm',routesDetailsAlarms);


module.exports = app;