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
    selectedSpecification: '',
    error: null
  };

  componentDidMount() {
    this.getHoliday();
    this.htmlElement.classList.remove('u-lock-scroll');
  }

  getHoliday = () => {
    // const { match } = this.props;
    fetch('/data/holiday.json')
      .then(response => response.json())
      .then(data => this.saveData(data))
      .catch(error => this.setState({ error }));
  };

  handleRadioChange = (e) => {
    this.setState({
      selectedSpecification: e.target.value
    });
  };

  handleSubmit = (e) => {
    const { selectedSpecification } = this.state;
    e.preventDefault();
    if (selectedSpecification !== '') {
      alert(`Chosen spec: ${selectedSpecification} submitted`);
    } else {
      alert('You must select a specification');
    }
  };

  formatMarkup = stringToFormat => ({ __html: stringToFormat });

  saveData(holiday) {
    this.setState({
      holiday: holiday.Holiday
    });
  }

  render() {
    console.log(this.state, 'abc');

    const { holiday, selectedSpecification, error } = this.state;

    const holidayImages = holiday.ImageUrls.map(image => ({
      thumbnail: image.ImageUrl,
      original: image.ImageUrl
    }));

    return (
      <ProductDetailsWrapper className="product-details">
        <ProductTitle>Holiday Details</ProductTitle>
        <Flex flexWrap="wrap" p={4}>
          {error ? (
            <div className="error-message">
              <p>Sorry there has been a problem with your request</p>
            </div>
          ) : (
            <Flex className="product-detail">
              <Flex width={[1, 1 / 2]} pr={4} className="product-images">
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
              </Flex>
              <Flex flexDirection="column" width={[1, 1 / 2]} className="product-description">
                <h1 className="product-description__title">{holiday.Title}</h1>
                <p className="product-description__number">xxx</p>
                {/* eslint-disable-next-line react/no-danger */}
                <p
                  className="product-description__text"
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
                  <Button>Buy now</Button>
                </Box>
              </Flex>
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
      xxx: PropTypes.string
    }).isRequired
  }).isRequired
};

export default ProductDetailView;
