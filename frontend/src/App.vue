<template>
  <div class="app">
    <div class="center">
      <h2>Currency Exchange</h2>
      <p>Convert Currencies with ease with up to date market rates</p>
    </div>
    <div class="converter_div">
      <div>
        <h3>From:</h3>
        <CurrencySelector @change="onChangedFromCurrency" />

        <div class="mt-40">
          <el-input
            type="number"
            placeholder="Enter amount"
            v-model.number="amount"
          >
            <template slot="append">{{ fromCurrency }}</template>
          </el-input>
        </div>
      </div>
      <div>
        <h3>To:</h3>
        <CurrencySelector @change="onChangedToCurrency" />

        <div class="mt-40">
          <!-- <input type="text" disabled :value="result" /> -->
          <el-input type="number" v-model.number="result">
            <template slot="append">{{ toCurrency }}</template>
          </el-input>
        </div>
      </div>
    </div>

    <div class="center mt-20">
      <div v-show="showMarketRates">
        <p>{{ `1 ${fromCurrency} = ${toRateValue} ${toCurrency}` }}</p>
      </div>
      <el-popover
        placement="top-start"
        title="Market Rates"
        width="200"
        trigger="hover"
        :content="`1 ${fromCurrency} = ${toRateValue} ${toCurrency}`"
      >
        <el-button
          slot="reference"
          :disabled="noValue"
          type="primary"
          @click="convertCurrency"
          :loading="btnLoading"
          >Convert</el-button
        >
      </el-popover>
    </div>
  </div>
</template>

<script>
import currenciesService from '@/api/currencies';
import CurrencySelector from '@/components/CurrencySelector';

export default {
  name: 'App',
  components: {
    CurrencySelector,
  },
  data() {
    return {
      fromCurrency: '',
      toCurrency: '',
      amount: null,
      result: null,
      toRateValue: null,
      btnLoading: false,
      showMarketRates: false,
      convertForm: {
        from: '',
        to: '',
        amount: 0,
      },
    };
  },
  computed: {
    noValue() {
      return this.fromCurrency === '' || this.toCurrency === '';
    },
  },
  methods: {
    onChangedFromCurrency(fromCurrencySymbol) {
      this.fromCurrency = fromCurrencySymbol;
      this.convertBaseRates();
    },
    onChangedToCurrency(toCurrencySymbol) {
      this.toCurrency = toCurrencySymbol;
      this.convertBaseRates();
    },
    async convertBaseRates() {
      // console.log(this.fromCurrency);
      // console.log(this.toCurrency);

      const rates = await this.getBaseRates(this.fromCurrency);

      const results = rates.filter(
        currency => currency.symbol === this.toCurrency
      );

      // console.log(rates);
      // console.log(results);
      this.toRateValue = results.length > 0 ? results[0].rate : 0;
    },
    async convertCurrency() {
      this.btnLoading = true;

      this.convertForm.from = this.fromCurrency;
      this.convertForm.to = this.toCurrency;
      this.convertForm.amount = this.amount;

      console.log(this.convertForm);

      const amountConverted = await currenciesService.convertRates(
        this.convertForm
      );
      console.log(amountConverted.data);
      this.result = amountConverted.data.amount_exchanged;
      this.btnLoading = false;
      this.showMarketRates = true;
    },
    async getBaseRates(currency) {
      const response = await currenciesService.getRates(currency);
      return response.data;
    },
  },
};
</script>

<style lang="scss">
.app {
  width: 500px;
  margin: 0 auto;
}
.converter_div {
  display: flex;
  padding: 10px 15px;
  justify-content: space-between;

  select {
    width: 200px;
    background-color: white;
    border: thin solid grey;
    border-radius: 4px;
    display: inline-block;
    font: inherit;
    line-height: 1.5em;
    padding: 0.5em 3.5em 0.5em 1em;
    margin: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  select.conv_select {
    background-image: linear-gradient(45deg, transparent 50%, grey 50%),
      linear-gradient(135deg, grey 50%, transparent 50%),
      linear-gradient(to right, skyblue, skyblue);
    background-position: calc(100% - 20px) calc(1em + 2px),
      calc(100% - 15px) calc(1em + 2px), 100% 0;
    background-size: 5px 5px, 5px 5px, 2.5em 2.5em;
    background-repeat: no-repeat;
  }
}
</style>
