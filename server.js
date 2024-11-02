const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/proyectos', (req, res) => {
  res.sendFile(path.join(__dirname, 'proyectos.html'));
});

app.get('/habilidades', (req, res) => {
  res.sendFile(path.join(__dirname, 'habilidades.html'));
});

app.get('/contacto', (req, res) => {
  res.sendFile(path.join(__dirname, 'contacto.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
