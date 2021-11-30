const express = require('express');

const { getCurrencies, getBaseRates } = require('../controllers/currencies');

const router = express.Router();

router.route('/').get(getCurrencies);
router.route('/:currency').get(getBaseRates);

module.exports = router;
