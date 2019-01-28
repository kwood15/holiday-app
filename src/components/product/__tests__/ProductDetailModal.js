import React from 'react';
import ReactStars from 'react-stars';
import { shallow } from 'enzyme';
import ProductDetailModal from '../ProductDetailModal';
import { QuantityButton, QuantityInput } from '../../shared/SharedStyles';

const holiday = {
  ProductId: 1,
  ProductImage: {
    Link: {
      Href: 'http://test1.com'
    }
  },
  Reviews: {
    AverageStarRating: null,
    ReviewCount: null
  },
  Price: {
    Currency: '£',
    Value: 999
  }
};

describe('<ProductDetailModal /> component', () => {
  const wrapper = shallow(<ProductDetailModal holiday={holiday} />);

  it('should render with the correct className', () => {
    expect(wrapper.hasClass('product product--modal')).toBe(true);
  });

  it('should have a label with a {htmlFor} prop thats value matches the button {id}', () => {
    expect(
      wrapper
        .find('label')
        .at(0)
        .prop('htmlFor')
    ).toEqual('quantityDecrease');
    expect(
      wrapper
        .find(QuantityButton)
        .at(0)
        .prop('id')
    ).toEqual('quantityDecrease');
    expect(
      wrapper
        .find('label')
        .at(1)
        .prop('htmlFor')
    ).toEqual('quantityAmount');
    expect(wrapper.find(QuantityInput).prop('id')).toEqual('quantityAmount');
    expect(
      wrapper
        .find('label')
        .at(2)
        .prop('htmlFor')
    ).toEqual('quantityIncrease');
    expect(
      wrapper
        .find(QuantityButton)
        .at(1)
        .prop('id')
    ).toEqual('quantityIncrease');
  });

  it('should call `preventDefault()` and update the quantity state when the minus button is clicked', () => {
    const event = { preventDefault: () => {} };
    jest.spyOn(event, 'preventDefault');

    expect(wrapper.state('quantity')).toEqual(1);
    wrapper.find('#quantityDecrease').simulate('click', event);
    expect(wrapper.state('quantity')).toEqual(1);

    wrapper.setState({ quantity: 2 });
    expect(wrapper.state('quantity')).toEqual(2);
    wrapper.find('#quantityDecrease').simulate('click', event);
    expect(event.preventDefault).toHaveBeenCalledTimes(2);
    expect(wrapper.state('quantity')).toEqual(1);
  });

  it('should call `preventDefault()` and update the quantity state when the plus button is clicked', () => {
    const event = { preventDefault: () => {} };
    jest.spyOn(event, 'preventDefault');

    expect(wrapper.state('quantity')).toEqual(1);
    wrapper.find('#quantityIncrease').simulate('click', event);
    expect(event.preventDefault).toHaveBeenCalledTimes(1);
    expect(wrapper.state('quantity')).toEqual(2);
  });

  it('should call an `alert()` when the form is submitted with the quantity of products', () => {
    window.alert = jest.fn();

    wrapper.find('.product-quantity').simulate('submit');
    expect(window.alert).toHaveBeenCalledTimes(1);
    expect(window.alert).toHaveBeenCalledWith(
      `Submitted with quantity: ${wrapper.state('quantity')}`
    );
  });

  it('should call an `alert()` when the form is submitted validating the minimum quantity', () => {
    window.alert = jest.fn();

    wrapper.find(QuantityInput).simulate('change', { target: { value: 0 } });
    wrapper.find('.product-quantity').simulate('submit');
    expect(window.alert).toHaveBeenCalledTimes(1);
    expect(window.alert).toHaveBeenCalledWith('You must order a minimum of 1 and maximum of 10');
  });

  it('should call an `alert()` when the form is submitted validating the maximum quantity', () => {
    window.alert = jest.fn();

    wrapper.find(QuantityInput).simulate('change', { target: { value: 11 } });
    wrapper.find('.product-quantity').simulate('submit');
    expect(window.alert).toHaveBeenCalledTimes(1);
    expect(window.alert).toHaveBeenCalledWith('You must order a minimum of 1 and maximum of 10');
  });

  it('should submit the form when pressing the `Enter` key and show an `alert()`', () => {
    const event = {};
    window.alert = jest.fn();

    wrapper.instance().handleKeyDown(event);
    wrapper.find(QuantityInput).simulate('keydown', { key: 'Enter' });
    expect(window.alert).toHaveBeenCalledTimes(1);
  });

  it('should not render a <ReactStars /> component nor a `ReviewCount` when a null `ReviewCount` is received', () => {
    expect(wrapper.find(ReactStars)).toHaveLength(0);
  });
});
