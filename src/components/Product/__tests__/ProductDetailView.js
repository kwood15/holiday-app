import React from 'react';
import { shallow, mount } from 'enzyme';
import ImageGallery from 'react-image-gallery';
import ProductDetailView from '../ProductDetailView';

describe('<ProductDetailView /> component', () => {
  const props = {
    match: {
      params: {
        seoPath: 'mitsis-galini-wellness-spa-resort',
        productId: '86884'
      }
    }
  };

  describe('A successful request to the api', () => {
    fetch.resetMocks();
    fetch.mockResponseOnce(
      JSON.stringify({
        holiday: {
          Price: {
            Value: 1052,
            Currency: '£'
          },
          Availability: true,
          Title: 'Mitsis Galini Wellness Spa Resort',
          ProductId: 86884,
          Description:
            'Close to Athens (150 km to the North), the hotel Galini Wellness Spa & Resort nestles in a valley of eucalyptus trees, an ideal starting point for extensive walking and hiking tours, for trips to the nearby ski centre of Parnassos mountain or for excursions to the Meteora, Delphi, Thermopiles and many other points of interest. This 5-star resort offers views of a charming courtyard, and offers 224 contemporary rooms. It provides family-friendly amenities, with room designs and services for families of all sizes, plus a playground and a kids pool. It also offers a sun deck with impressive sea and pool views. Every room at Mitsis Galini Wellness Spa & Resort comes with a kitchenette and a mini bar, and the bathrooms offer slippers and bathrobes. Each provides a variety of entertainment amenities, including a CD player and a DVD player.',
          SeoPath: 'mitsis-galini-wellness-spa-resort',
          ProductLink: {
            Href: '/mitsis-galini-wellness-spa-resort'
          },
          ProductImage: {
            Link: {
              Href:
                'https://d376emoj42ssbs.cloudfront.net/main/data/media/BookGreece/53033/53033_861012_lg.jpg'
            },
            MimeType: 'image/jpeg'
          },
          ImageUrls: [
            {
              ImageNo: 1,
              ImageUrl:
                'https://d376emoj42ssbs.cloudfront.net/main/data/media/BookGreece/53033/53033_861009.jpg'
            }
          ],
          Reviews: {
            AverageStarReviewRating: 4.8517,
            ReviewCount: 29
          },
          RoomTypes: [
            {
              RoomTypeId: 1,
              RoomType: 'Double or Twin Mountain View'
            },
            {
              RoomTypeId: 2,
              RoomType: 'Double or Twin Room Sea View'
            }
          ]
        }
      })
    );

    const wrapper = mount(<ProductDetailView {...props} />);

    wrapper.setState({
      holiday: {
        ImageUrls: [
          {
            ImageNo: 1,
            ImageUrl:
              'https://d376emoj42ssbs.cloudfront.net/main/data/media/BookGreece/53033/53033_861009.jpg'
          }
        ],
        RoomTypes: [
          {
            RoomTypeId: 1,
            RoomType: 'Double or Twin Mountain View'
          },
          {
            RoomTypeId: 2,
            RoomType: 'Double or Twin Room Sea View'
          }
        ]
      },
      selectedRoomOption: '',
      error: null
    });

    it('should make a call to the api', () => {
      expect(fetch.mock.calls.length).toEqual(1);
    });

    it('should render a <ProductDetailView /> component', () => {
      expect(wrapper).toHaveLength(1);
    });

    it('should render an <ImageGallery /> component that passes through an {items} prop that receives 2 urls', () => {
      expect(wrapper.find(ImageGallery).prop('items')).toEqual([
        {
          original:
            'https://d376emoj42ssbs.cloudfront.net/main/data/media/BookGreece/53033/53033_861009.jpg',
          thumbnail:
            'https://d376emoj42ssbs.cloudfront.net/main/data/media/BookGreece/53033/53033_861009.jpg'
        }
      ]);
    });

    it('should display a product title as a <h1></h1> tag', () => {
      expect(wrapper.find('.product-description__title').type()).toEqual('h1');
      expect(wrapper.find('.product-description__title').text()).toEqual(
        'Mitsis Galini Wellness Spa Resort'
      );
    });

    it('should call a function passing in the unformatted HTML string of the product description', () => {
      const unFormattedDescription = '';
      const formatMarkup = jest.fn();
      const result = formatMarkup(unFormattedDescription);

      expect(result).toBeUndefined();
      expect(formatMarkup).toHaveBeenCalledTimes(1);
      expect(formatMarkup).toHaveBeenCalledWith(unFormattedDescription);
    });

    it('should return the result of the function call with a formatted HTML string for the product description', () => {
      const unFormattedDescription = '';
      const formattedDescription = '';

      const formatMarkup = jest.fn().mockImplementationOnce(() => formattedDescription);
      expect(formatMarkup(unFormattedDescription)).toBe(formattedDescription);
      expect(formatMarkup).toHaveBeenCalledWith(unFormattedDescription);
    });

    it('should display the product stock availabilty', () => {
      expect(wrapper.find('.product-description__stock-status').html()).toEqual(
        '<p class="product-description__stock-status">Product Availability: <strong>Available</strong></p>'
      );
    });

    it('should call `preventDefault()` and an `alert()` without a radio button value when the form is submitted', () => {
      const event = { preventDefault: () => {} };
      window.alert = jest.fn();
      jest.spyOn(event, 'preventDefault');

      wrapper.find('form.product-specification').simulate('submit', event);
      expect(event.preventDefault).toHaveBeenCalledTimes(1);
      expect(window.alert).toHaveBeenCalledTimes(1);
      expect(window.alert).toHaveBeenCalledWith('You must select a room type');
    });

    it('should set the state when a radio button is selected', () => {
      wrapper
        .find('input[type="radio"]')
        .at(0)
        .simulate('change', { target: { value: 'selected radio button' } });
      expect(wrapper.state('selectedRoomOption')).toBe('selected radio button');
    });

    it('should call `preventDefault()` and an `alert()` with the selected radio button value when the form is submitted', () => {
      const event = { preventDefault: () => {} };
      window.alert = jest.fn();
      jest.spyOn(event, 'preventDefault');

      wrapper.find('form.product-specification').simulate('submit', event);
      expect(event.preventDefault).toHaveBeenCalledTimes(1);
      expect(window.alert).toHaveBeenCalledTimes(1);
      expect(window.alert).toHaveBeenCalledWith('Chosen room: selected radio button submitted');
    });
  });

  describe('A failed response from the api', () => {
    fetch.resetMocks();
    fetch.mockRejectOnce(new Error('Error has been thrown'));

    const wrapper = shallow(<ProductDetailView {...props} />);

    it('should make a call to the api', () => {
      expect(fetch.mock.calls.length).toEqual(1);
    });

    it('should not render any product details', () => {
      expect(wrapper.find('.product-detail')).toHaveLength(0);
    });

    it('should render an error message', () => {
      expect(wrapper.find('.error-message')).toHaveLength(1);
    });
  });
});
