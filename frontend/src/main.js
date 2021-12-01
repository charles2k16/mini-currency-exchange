import Vue from 'vue';
import App from './App.vue';
import '@/assets/css/base.css';
import '@/plugins/element/';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
