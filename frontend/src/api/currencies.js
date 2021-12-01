import axios from 'axios';
import config from '../config';

export default {
  name: 'currenciesService',

  getCurrencies() {
    let url = config.CURRENCIES_URL;
    return axios
      .get(url)
      .then(response => Promise.resolve(response.data))
      .catch(error => Promise.reject(error));
  },
  getRates(currency) {
    let url = config.CURRENCIES_URL + currency;
    return axios
      .get(url)
      .then(response => Promise.resolve(response.data))
      .catch(error => Promise.reject(error));
  },
  convertRates(formdata) {
    let url = config.EXCHANGE_URL;
    return axios
      .post(url, formdata)
      .then(response => Promise.resolve(response.data))
      .catch(error => Promise.reject(error));
  },
};
