const fetch = require('node-fetch');

// @desc      Get all exchange
// @route     POST /api/exchange
exports.convertCurrency = async (req, res, next) => {
  const baseRates = await getRatesFromApi(req.body.from);

  const toRateValue = baseRates.data[req.body.to];

  const getToRateAmountExchanged = req.body.amount * toRateValue;

  console.log(toRateValue);
  console.log(getToRateAmountExchanged);

  const responseData = {
    from: req.body.from,
    to: req.body.to,
    amount: req.body.amount,
    amount_exchanged: getToRateAmountExchanged,
  };

  res.status(200).json({
    success: true,
    data: responseData,
  });
};

const getRatesFromApi = currency => {
  let ratesUrl = `https://freecurrencyapi.net/api/v2/latest?apikey=${process.env.ACCESS_KEY_ID_RATES}&base_currency=${currency}`;

  return fetch(ratesUrl)
    .then(res => res.json())
    .then(json => Promise.resolve(json))
    .catch(error => Promise.reject(error));
};
