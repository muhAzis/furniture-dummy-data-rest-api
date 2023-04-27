const express = require('express');
const { response, homeResponse } = require('./response');
const dFurniture = require('./data');
const app = express();

app.get('/', (req, res) => {
  homeResponse(200, res);
});

app.get('/data', (req, res) => {
  response(200, dFurniture, 'Data sent successfully', res);
});

app.get('/data/type/:type', (req, res) => {
  const type = req.params.type;
  const data = dFurniture.filter((furniture) => furniture.type == type);

  response(200, data, `Data with type '${type}' sent successfully`, res);
});

app.get('/data/product/:id', (req, res) => {
  const id = req.params.id;
  const data = dFurniture.filter((furniture) => furniture.id == id);

  response(200, data, `Data with id '${id}' sent successfully`, res);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server berjalan pada port ${PORT}`);
});
