import React from 'react';
import ReactStars from 'react-stars';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import ProductItem from '../ProductItem';
import Modal from '../../modal/Modal';
import { ProductImage, ProductWrapper } from '../ProductStyles';

describe('<ProductItem /> component', () => {
  const product1 = {
    ProductId: 1,
    ProductImage: {
      Link: {
        Href: 'http://test1.com'
      }
    },
    Reviews: {
      AverageStarRating: 4,
      ReviewCount: 15
    },
    Price: {
      Currency: '£',
      Value: 3.49
    }
  };

  const product2 = {
    ProductId: 2,
    ProductImage: {
      Link: {
        Href: 'http://test2.com'
      }
    },
    Reviews: {
      AverageStarRating: null,
      ReviewCount: null
    },
    Price: {
      Currency: '$',
      Value: 6.49
    }
  };

  let wrapper = mount(
    <MemoryRouter>
      <ProductItem product={product1} />
    </MemoryRouter>
  );

  it('should render with the correct className', () => {
    expect(wrapper.find(ProductWrapper).at(0).hasClass('product')).toBe(true);
  });

  it('should render a <ProductImage /> component that passes through a {src} prop that receives a url', () => {
    expect(wrapper.find(ProductImage).at(0).prop('src')).toEqual('http://test1.com');
  });

  it('should render with a currency and price', () => {
    expect(wrapper.find('.product__pricing').at(0).text()).toEqual('£3.49');
  });

  it('should render with a `ReviewCount`', () => {
    expect(wrapper.find('.product__rating-count').at(0).text()).toEqual('(15)');
  });

  it('should render a <ReactStars /> component', () => {
    expect(wrapper.find(ReactStars).exists()).toBe(true);
  });

  it('should render a <ReactStars /> component that passes through a {count} prop that receives a rating', () => {
    expect(wrapper.find(ReactStars).at(0).prop('count')).toEqual(4);
  });

  it('should render a <Modal /> component that passes through a {handleClose} prop that calls a function', () => {
    wrapper.find(Modal).props().handleClose();
    expect(wrapper.find(ProductItem).state('openModal')).toEqual(false);
  });

  it('should close the <Modal /> component when clicking on the modal overlay', () => {
    const e = {};
    wrapper.find(Modal).props().handleOutsideClick(e);
    wrapper.find(Modal).props().modalRef();
    expect(wrapper.find(ProductItem).state('openModal')).toEqual(false);
  });

  it('should call `preventDefault()` and it will update the state when clicked', () => {
    const event = { preventDefault: () => {} };
    jest.spyOn(event, 'preventDefault');

    wrapper.find('.product__link').simulate('click', event);
    expect(event.preventDefault).toHaveBeenCalledTimes(1);
    expect(wrapper.find(ProductItem).state('openModal')).toEqual(true);
  });

  it('should not render a <ReactStars /> component nor a `ReviewCount` when a null `ReviewCount` is received', () => {
    wrapper = shallow(
      <ProductItem product={product2} />
    );
    expect(wrapper.find(ReactStars)).toHaveLength(0);
  });
});
