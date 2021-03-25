const express = require('express');
const path = require ('path');

const app = express();

//SETTINGS
app.use(express.urlencoded({extended: false}));
app.use(express.json()); // Sólo necesario para recibir json desde otras apps
app.use(require('./routes/index'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('port', process.env.PORT || 3000);

module.exports = app;