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
      all_product: 'GET, https://github.com/muhAzis/furniture-dummy-data-rest-api/data',
      by_type: {
        request: 'GET, https://github.com/muhAzis/furniture-dummy-data-rest-api/data/type/:type',
        example: 'GET, https://github.com/muhAzis/furniture-dummy-data-rest-api/data/type/chair',
      },
      by_product_id: {
        request: 'GET, https://github.com/muhAzis/furniture-dummy-data-rest-api/data/product/:id',
        example: 'GET, https://github.com/muhAzis/furniture-dummy-data-rest-api/data/product/frntrdcr2',
      },
    },
  });
};

module.exports = { response, homeResponse };
