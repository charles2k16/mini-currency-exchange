const fetch = require('node-fetch');

// @desc      Get all currencies
// @route     GET /api/currencies
exports.getCurrencies = async (req, res, next) => {
  const currencies = await getCurrencyFromApi();

  let usefulCurrencies = ['EUR', 'USD', 'GBP', 'CAD'];

  let newCurrencies = [];

  // iterate over currencies from api
  usefulCurrencies.forEach((curr, index) => {
    // push the object keys and values to the new array
    newCurrencies.push({ name: currencies.symbols[curr], symbol: `${curr}` });
  });

  res.status(200).json({
    success: true,
    data: newCurrencies,
  });
};

// @desc      Get all base rates
// @route     GET /api/rates/:currency
exports.getBaseRates = async (req, res, next) => {
  const baseRates = await getRatesFromApi(req.params.currency);

  let usefulCurrencies = ['EUR', 'USD', 'GBP', 'CAD'];

  let newRates = [];

  // iterate over currencies from api
  usefulCurrencies.forEach((curr, index) => {
    // push the object keys and values to the new array
    newRates.push({ symbol: `${curr}`, rate: baseRates.data[curr] });
  });

  res.status(200).json({
    success: true,
    data: newRates,
  });
};

const getCurrencyFromApi = () => {
  let exchageUrl = `http://data.fixer.io/api/symbols?access_key=${process.env.ACCESS_KEY_ID}`;

  return fetch(exchageUrl)
    .then(res => res.json())
    .then(json => Promise.resolve(json))
    .catch(error => Promise.reject(error));
};

const getRatesFromApi = currency => {
  let ratesUrl = `https://freecurrencyapi.net/api/v2/latest?apikey=${process.env.ACCESS_KEY_ID_RATES}&base_currency=${currency}`;

  return fetch(ratesUrl)
    .then(res => res.json())
    .then(json => Promise.resolve(json))
    .catch(error => Promise.reject(error));
};
