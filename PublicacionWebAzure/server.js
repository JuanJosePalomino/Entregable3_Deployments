const express = require('express');
const path = require('path');
 
const app = express();
const port = process.env.PORT || 3000;
 
// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));
 
// Ruta raíz
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
 
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});