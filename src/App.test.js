import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('<App /> component', () => {
  // mounted as current support for `useState` hook
  const wrapper = mount(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  it('should render the correct components', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find(App).exists()).toBe(true);
  });

  it('should call an `alert()` when the search button is clicked and no searchTerm is entered', () => {
    window.alert = jest.fn();

    wrapper.find('input[type="search"]').simulate('change', { target: { value: '' } });
    wrapper
      .find('.form__btn')
      .at(0)
      .simulate('click');
    expect(window.alert).toHaveBeenCalledTimes(1);
    expect(window.alert).toHaveBeenCalledWith('Please enter at least one character');
  });

  it('should set the value of the search input when typing in a search term', () => {
    wrapper.find('input[type="search"]').simulate('change', { target: { value: 'Good' } });
    expect(wrapper.find('input[type="search"]').prop('value')).toEqual('Good');
  });

  it('should call an `alert()` when the search button is clicked and a searchTerm is entered', () => {
    window.alert = jest.fn();

    wrapper.find('input[type="search"]').simulate('change', { target: { value: 'Good' } });
    wrapper
      .find('.form__btn')
      .at(0)
      .simulate('click');
    expect(window.alert).toHaveBeenCalledTimes(1);
    expect(window.alert).toHaveBeenCalledWith('Submitted with: Good');
  });
});
