const response = (status, data, message, res) => {
  res.json(status, {
    payload: data,
    message,
  });
};

const homeResponse = (status, res) => {
  res.json(status, {
    maintainer: 'Muhamad Abdul Azis',
    source: 'https://github.com/muhAzis/furniture-dummy-data-rest-api',
    endpoints: {
      all_product: 'GET, http://localhost:5000/data',
      by_type: {
        request: 'GET, http://localhost:5000/data/type/:type',
        example: 'GET, http://localhost:5000/data/type/chair',
      },
      by_product_id: {
        request: 'GET, http://localhost:5000/data/product/:id',
        example: 'GET, http://localhost:5000/data/product/frntrdcr2',
      },
    },
  });
};

module.exports = { response, homeResponse };
