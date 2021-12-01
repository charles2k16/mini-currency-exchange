// function getApiUrl () {
//   let hn = window.location.hostname
//   if (hn === 'localhost') {
//     return 'http://127.0.0.1:5000/api/'
//   }
// }

const API_URL = '/api/';

export default {
  API_BASE: API_URL,
  CURRENCIES_URL: API_URL + 'currencies/',
  EXCHANGE_URL: API_URL + 'exchange',
};
