import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import { Flex } from '@rebass/grid';

import Modal from '../modal/Modal';
import ProductDetailModal from './ProductDetailModal';
import { Button, BadgeWrapper } from '../shared/SharedStyles';
import { ProductWrapper, ProductImage } from './ProductStyles';

class ProductItem extends Component {
  htmlElement = document.querySelector('html');

  state = {
    openModal: false
  };

  showModal = (e) => {
    e.preventDefault();
    this.setState(
      {
        openModal: true
      },
      () => this.closeButtonNode.focus()
    );
    this.htmlElement.classList.add('u-lock-scroll');
  };

  hideModal = () => {
    this.setState(
      {
        openModal: false
      },
      () => this.openButtonNode.focus()
    );
    this.htmlElement.classList.remove('u-lock-scroll');
  };

  handleOutsideClick = (e) => {
    if (this.modalNode && this.modalNode.contains(e.target)) return;
    this.hideModal();
  };

  render() {
    const { openModal } = this.state;
    const { holiday } = this.props;
    return (
      <Fragment>
        <ProductWrapper className="product" itemScope itemType="http://schema.org/Product">
          <a href="/" className="product__link" onClick={this.showModal} title="View details">
            <BadgeWrapper text="Offer" secondary="true" />
            <h1 className="product__title u-text-center">{holiday.Title}</h1>
            <ProductImage
              className="product__image"
              itemProp="image"
              src={holiday.ProductImage.Link.Href}
              alt={holiday.SeoPath}
            />
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
            <Button ref={node => (this.openButtonNode = node)}>View details</Button>
          </a>
        </ProductWrapper>
        <Modal
          openModal={openModal}
          handleClose={this.hideModal}
          modalRef={node => (this.modalNode = node)}
          buttonRef={node => (this.closeButtonNode = node)}
          handleOutsideClick={this.handleOutsideClick}
        >
          <ProductDetailModal holiday={holiday} />
        </Modal>
      </Fragment>
    );
  }
}

ProductItem.propTypes = {
  holiday: PropTypes.shape({
    ProductId: PropTypes.number.isRequired
  }).isRequired
};

export default ProductItem;
