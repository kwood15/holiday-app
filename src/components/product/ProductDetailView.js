import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from '@rebass/grid';
import ImageGallery from 'react-image-gallery';
import { Button } from '../shared/SharedStyles';
import { ProductDetailsWrapper, ProductTitle } from './ProductStyles';

class ProductDetailView extends Component {
  htmlElement = document.querySelector('html');

  state = {
    holiday: {
      ImageUrls: []
    },
    error: null
  };

  componentDidMount() {
    this.getHoliday()
      .then(res => this.setState({
        holiday: res.holiday
      }))
      .catch(error => this.setState({ error }));
    this.htmlElement.classList.remove('u-lock-scroll');
  }

  getHoliday = async () => {
    const { match } = this.props;
    const response = await fetch(`/api/holiday/${match.params.seoPath}/${match.params.productId}`);
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  formatMarkup = stringToFormat => ({ __html: stringToFormat });

  render() {
    const { holiday, error } = this.state;

    const holidayImages = holiday.ImageUrls.map(image => ({
      thumbnail: image.ImageUrl,
      original: image.ImageUrl
    }));

    return (
      <ProductDetailsWrapper className="product-details">
        <ProductTitle>Holiday Details</ProductTitle>
        <Flex py={4}>
          {error ? (
            <div className="error-message">
              <p>Sorry there has been a problem with your request</p>
            </div>
          ) : (
            <Flex flexWrap="wrap" className="product-detail">
              <Box width={[1, 1, 1 / 2]} pr={4} className="product-images">
                <ImageGallery
                  lazyLoad
                  items={holidayImages}
                  showFullscreenButton={false}
                  thumbnailPosition="left"
                  originalTitle={holiday.Title}
                  originalAlt={holiday.SeoPath}
                  thumbnailTitle={holiday.Title}
                  thumbnailAlt={holiday.SeoPath}
                />
              </Box>
              <Box width={[1, 1, 1 / 2]} flexDirection="column" className="product-description">
                <h1 className="product-description__title">{holiday.Title}</h1>
                <p className="product-description__product-number">xxx</p>
                <p
                  className="product-description__text"
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={this.formatMarkup(holiday.Description)}
                />
                <p className="product-description__stock-status">
                  Product Availability:
                  {' '}
                  <strong>{holiday.Availability ? 'Available' : 'Not Available'}</strong>
                </p>
                <Box
                  as="form"
                  py={3}
                  className="product-specification"
                  onSubmit={this.handleSubmit}
                >
                  <Button>Book now</Button>
                </Box>
              </Box>
            </Flex>
          )}
        </Flex>
      </ProductDetailsWrapper>
    );
  }
}

ProductDetailView.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      seoPath: PropTypes.string,
      productId: PropTypes.string
    }).isRequired
  }).isRequired
};

export default ProductDetailView;
