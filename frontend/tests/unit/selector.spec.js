import { shallowMount } from '@vue/test-utils';
import CurrencySelector from '@/components/CurrencySelector.vue';

describe('CurrencySelector.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(CurrencySelector, {
      data() {
        return {
          currencies: [{
            name: 'United States Dollar', symbol: 'USD'
          }],
          currencySymbol: 'EUR',
        };
      },
    });


    wrapper.findAll('#conv_select').at(0).trigger('change');

    // expect(wrapper.find('option:checked').element.value).toBe('');

    // expect(wrapper.text()).toMatch(msg);
  });
});
