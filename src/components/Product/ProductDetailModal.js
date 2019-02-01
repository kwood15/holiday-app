import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from '@rebass/grid';
import ReactStars from 'react-stars';

import { ProductWrapper, ProductImage } from './ProductStyles';
import {
  Button, QuantityButton, QuantityInput, BaseLink
} from '../Shared/SharedStyles';

class ProductDetailModal extends Component {
  state = {
    quantity: 1
  };

  increaseQuantity = (e) => {
    const { quantity } = this.state;
    e.preventDefault();
    this.setState({
      quantity: quantity + 1
    });
  };

  decreaseQuantity = (e) => {
    const { quantity } = this.state;
    e.preventDefault();
    if (quantity > 1) {
      this.setState({
        quantity: quantity - 1
      });
    }
  };

  handleChange = (e) => {
    this.setState({
      quantity: e.target.value
    });
  };

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.postForm();
    }
  };

  postForm = () => {
    const { quantity } = this.state;
    const minQuantity = 1;
    const maxQuantity = 10;
    if (quantity >= minQuantity && quantity <= maxQuantity) {
      alert(`Submitted with quantity: ${quantity}`);
    } else {
      alert('You must order a minimum of 1 and maximum of 10');
    }
  };

  render() {
    const { quantity } = this.state;
    const { holiday } = this.props;
    const isDisabled = quantity === 10;

    return (
      <ProductWrapper className="product product--modal">
        <Flex alignItems="flex-start">
          <Box width={[1, 1 / 2]} itemScope itemType="http://schema.org/Product">
            <ProductImage
              itemProp="image"
              src={holiday.ProductImage.Link.Href}
              alt={holiday.SeoPath}
              className="product__image"
            />
          </Box>

          <Box width={[1, 1 / 2]} pl={3}>
            <h1 className="product__heading u-margin-top-none">
              <span itemProp="name">{holiday.Title}</span>
            </h1>

            {holiday.Reviews.ReviewCount ? (
              <Flex
                alignItems="center"
                className="product__rating"
                itemProp="aggregateRating"
                itemScope
                itemType="http://schema.org/AggregateRating"
              >
                <ReactStars
                  count={holiday.Reviews.AverageStarRating}
                  size={24}
                  color1="#ffbe4f"
                  edit={false}
                  half
                />
                <span className="product__rating-value u-visually-hidden" itemProp="ratingValue">
                  Average star rating count:
                  {holiday.Reviews.AverageStarRating}
                </span>
                <span className="u-visually-hidden">Review count:</span>
                <span className="product__rating-count" itemProp="ratingCount">
                  (
                  {holiday.Reviews.ReviewCount}
                  )
                </span>
              </Flex>
            ) : null}

            <div className="product__description">
              <p itemProp="description">{holiday.ShortDescription}</p>
            </div>
            <div
              className="product__pricing"
              itemProp="offers"
              itemScope
              itemType="http://schema.org/Offer"
            >
              <span
                className="product__pricing-currency"
                itemProp="priceCurrency"
                content={holiday.Price.Currency}
              >
                {holiday.Price.Currency}
              </span>
              <span
                className="product__pricing-value"
                itemProp="price"
                content={holiday.Price.Value}
              >
                {holiday.Price.Value}
                {' '}
                per person
              </span>
            </div>

            <Box as="form" className="product-quantity" onSubmit={this.postForm} pt={3}>
              <fieldset className="product__quantity-fields">
                <label htmlFor="quantityDecrease" className="u-visually-hidden">
                  Decrease quantity
                </label>
                <QuantityButton id="quantityDecrease" onClick={this.decreaseQuantity}>
                  <span className="product-quantity__text">–</span>
                </QuantityButton>
                <label htmlFor="quantityAmount" className="u-visually-hidden">
                  Enter Quantity amount
                </label>
                <QuantityInput
                  type="number"
                  id="quantityAmount"
                  aria-labelledby="Enter quantity text field"
                  name="quantity"
                  onKeyDown={this.handleKeyDown}
                  onChange={this.handleChange}
                  value={quantity}
                />
                <label htmlFor="quantityIncrease" className="u-visually-hidden">
                  Increase quantity
                </label>
                <QuantityButton
                  id="quantityIncrease"
                  onClick={this.increaseQuantity}
                  disabled={isDisabled}
                >
                  <span className="product-quantity__text">+</span>
                </QuantityButton>
              </fieldset>

              <Flex className="product-ctas" pt={2} flexWrap="wrap">
                <Flex pr={3} pt={3}>
                  <Button className="primary">Book now</Button>
                </Flex>
                <Flex pt={3}>
                  <BaseLink
                    id={holiday.ProductId}
                    to={{ pathname: `/holiday/${holiday.SeoPath}/${holiday.ProductId}` }}
                    className="button-link"
                    title="View details"
                  >
                    view details
                  </BaseLink>
                </Flex>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </ProductWrapper>
    );
  }
}

ProductDetailModal.propTypes = {
  holiday: PropTypes.shape({
    ProductId: PropTypes.number.isRequired
  }).isRequired
};

export default ProductDetailModal;
