import { shallowMount } from '@vue/test-utils';
import CurrencySelector from '@/components/CurrencySelector.vue';

describe('CurrencySelector.vue', () => {
  it('renders props.msg when passed', async () => {
    const wrapper = shallowMount(CurrencySelector);

    const options = wrapper.find('select').findAll('option');

    await options.setSelected();

    expect(wrapper.find('option:checked').element.value).toBe('EUR');

    // expect(wrapper.text()).toMatch(msg);
  });
});
