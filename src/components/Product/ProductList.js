import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Flex } from '@rebass/grid';

import { Loader } from '../Shared/Loader';
import { LoaderWrapper } from '../Shared/Loader/LoaderStyles';
import Dropdown from '../Shared/Form/Dropdown';
import ProductItem from './ProductItem';
import { HeadingH1 } from '../Shared/SharedStyles';

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
    if (response.status !== 200) throw new Error(body.message);
    return body;
  };

  filterHolidays = () => {
    const { holidays } = this.state;
    const { searchTerm } = this.props;
    const filteredHolidays = holidays.filter(
      holiday => holiday.Title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    );
    this.setState({
      filteredHolidays
    });
  };

  render() {
    const { filteredHolidays, isLoading, error } = this.state;
    return (
      <section className="product-results">
        <HeadingH1>Holiday Resorts in Greece</HeadingH1>
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
          <Flex flexDirection="column">
            <Flex alignSelf="flex-end" width={[1, 1 / 2, 1 / 4]} px={2} pb={4}>
              <Dropdown />
            </Flex>
            <Flex as="ul" flexWrap="wrap" className="product-results__list">
              {filteredHolidays.map(holiday => (
                <Flex as="li" key={holiday.ProductId} width={[1, 1 / 2, 1 / 4]} p={2}>
                  <ProductItem holiday={holiday} id={holiday.ProductId} />
                </Flex>
              ))}
            </Flex>
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
