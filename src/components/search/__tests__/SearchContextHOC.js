import React from 'react';
import { mount } from 'enzyme';
import WithSearchContext from '../SearchContextConsumer';
import ProductList from '../../product/ProductList';

describe('<WithSearchContext/> component', () => {
  const wrapper = mount(<WithSearchContext />);

  it('should render the component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should return a <ProductList /> component passing in the context value to a {searchTerm} prop', () => {
    expect(wrapper.find(ProductList).exists()).toBe(true);
    expect(wrapper.find(ProductList).prop('searchTerm')).toEqual('');
  });
});
