const express = require('express');
const { convertCurrency } = require('../controllers/exchanges');

const router = express.Router();

router.route('/').post(convertCurrency);

module.exports = router;
