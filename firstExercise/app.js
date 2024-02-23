const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Definición de una ruta para la página de inicio
app.get('/', (req, res) => {
  res.send('¡Bienvenido a nuestra página de inicio!');
});

// Definición de una ruta para la página "Acerca de"
app.get('/acerca', (req, res) => {
  res.send('Somos una pequeña empresa dedicada a...');
});

app.get('/producto/:id', (req, res) => {
  const productId = req.params.id;
  res.send(`Detalles del producto ${productId}`);
});

app.get('/contacto', (req, res) => {
  res.send('Ponte en contacto con nosotros a través de...');
});

app.get('/servicios', (req, res) => {
  res.send('Nuestros servicios incluyen...');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Express en funcionamiento en el puerto ${port}`);
});