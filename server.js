const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// analiza datos del cuerpo de las solicitudes
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

// Ruta
app.get('/', (req, res) => {
  res.render('index'); 
});

app.get('/proyectos', (req, res) => {
  res.render('proyectos'); 
});

app.get('/habilidades', (req, res) => {
  res.render('habilidades'); 
});

app.get('/contacto', (req, res) => {
  res.render('contacto'); 
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
