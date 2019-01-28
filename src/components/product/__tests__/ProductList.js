import React from 'react';
import { shallow } from 'enzyme';
import ProductList from '../ProductList';
import ProductItem from '../ProductItem';

describe('<ProductList /> component', () => {
  describe('A successful request to the api', () => {
    fetch.resetMocks();
    fetch.mockResponseOnce(
      JSON.stringify({
        holidays: {
          Holidays: [
            {
              Availability: true,
              Title: 'Mitsis Galini Wellness Spa Resort',
              ProductId: 86884
            },
            {
              Availability: true,
              Title: 'Divani Meteora Club Hotel',
              ProductId: 86885
            },
            {
              Availability: true,
              Title: 'Pilio Holiday Club',
              ProductId: 86886
            }
          ]
        }
      })
    );

    const wrapper = shallow(<ProductList searchTerm="Club" />);

    it('should make a call to the api', () => {
      expect(fetch.mock.calls.length).toEqual(1);
    });

    it('should render 1 <ProductList /> component', () => {
      expect(wrapper).toHaveLength(1);
    });

    it('should render with the correct className', () => {
      expect(wrapper.hasClass('product-results')).toBe(true);
    });

    it('should render 3 <ProductItem /> components', () => {
      expect(wrapper.find(ProductItem)).toHaveLength(3);
    });

    it('should pass through an {id} prop to the <ProductItem /> component that receives an id', () => {
      expect(
        wrapper
          .find(ProductItem)
          .at(0)
          .prop('id')
      ).toEqual(86884);
    });

    it('should call a function when the component receives new data via the {searchTerm} prop', () => {
      wrapper.instance().componentWillReceiveProps();
      wrapper.instance().filterHolidays();
    });

    it('should render the correct number of products based on the value of the {searchTerm} prop', () => {
      expect(wrapper.find(ProductItem)).toHaveLength(2);
    });
  });

  describe('A failed response from the api', () => {
    fetch.resetMocks();
    fetch.mockRejectOnce(new Error('Error has been thrown'));

    const wrapper = shallow(<ProductList />);

    it('should make a call to the api', () => {
      expect(fetch.mock.calls.length).toEqual(1);
    });

    it('should not render any products', () => {
      expect(wrapper.find(ProductItem)).toHaveLength(0);
    });

    it('should render an error message', () => {
      expect(wrapper.find('.error-message')).toHaveLength(1);
    });
  });
});
