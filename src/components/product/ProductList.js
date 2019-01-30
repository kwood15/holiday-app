import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Flex } from '@rebass/grid';

import { Loader } from '../shared/Loader';
import { LoaderWrapper } from '../shared/Loader/LoaderStyles';

import ProductItem from './ProductItem';
import { ProductTitle } from './ProductStyles';

class ProductList extends Component {
  state = {
    holidays: [],
    filteredHolidays: [],
    isLoading: true,
    error: null
  };

  componentDidMount() {
    this.getHolidays()
      .then(response => this.setState({
        holidays: response.holidays.Holidays,
        filteredHolidays: response.holidays.Holidays,
        isLoading: false
      }))
      .catch(error => this.setState({
        error,
        isLoading: false
      }));
  }

  componentWillReceiveProps() {
    this.filterHolidays();
  }

  getHolidays = async () => {
    const response = await fetch('/api/holidays');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  filterHolidays = () => {
    const { holidays } = this.state;
    const { searchTerm } = this.props;
    // eslint-disable-next-line arrow-body-style
    const filteredHolidays = holidays.filter((holiday) => {
      return holiday.Title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
    this.setState({
      filteredHolidays
    });
  };

  render() {
    const { filteredHolidays, isLoading, error } = this.state;
    return (
      <section className="product-results">
        <ProductTitle className="u-text-center">Holiday Resorts in Greece</ProductTitle>
        {isLoading && (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        )}
        {error ? (
          <div className="error-message">
            <p>Sorry there has been a problem with your request</p>
          </div>
        ) : (
          <Flex as="ul" flexWrap="wrap" className="product-results__list">
            {filteredHolidays.map(holiday => (
              <Flex as="li" key={holiday.ProductId} width={[1, 1 / 2, 1 / 4]} p={2}>
                <ProductItem holiday={holiday} id={holiday.ProductId} />
              </Flex>
            ))}
          </Flex>
        )}
      </section>
    );
  }
}

ProductList.defaultProps = {
  searchTerm: ''
};

ProductList.propTypes = {
  searchTerm: PropTypes.string
};

export default ProductList;
