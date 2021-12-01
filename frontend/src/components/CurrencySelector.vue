<template>
  <div>
    <select
    id="conv_select"
      class="conv_select"
      v-model="currencySymbol"
      @change="onChangeCurrency"
    >
      <option
        v-for="(curr, index) in currencies"
        :key="index"
        :value="curr.symbol"
        :label="curr.name"
      ></option>
    </select>
  </div>
</template>

<script>
import currenciesService from '@/api/currencies';

export default {
  name: 'CurrencySelector',
  data() {
    return {
      currencies: [],
      currencySymbol: '',
    };
  },
  created() {
    this.getCurrencies();
  },
  methods: {
    async getCurrencies() {
      const response = await currenciesService.getCurrencies();
      this.currencies = response.data;
    },
    async onChangeCurrency() {
      //  emits events to the moth components
      this.$emit('change', this.currencySymbol);
    },
  },
};
</script>
