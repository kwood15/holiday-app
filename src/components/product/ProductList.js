import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Flex } from '@rebass/grid';
import ProductItem from './ProductItem';
import { ProductTitle } from './ProductStyles';

class ProductList extends Component {
  state = {
    holidays: [],
    filteredHolidays: [],
    error: null
  };

  componentDidMount() {
    this.getHolidays()
      .then(res => this.setState({
        holidays: res.holidays.Holidays,
        filteredHolidays: res.holidays.Holidays
      }))
      .catch(error => this.setState({ error }));
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
  }

  render() {
    const { filteredHolidays, error } = this.state;
    return (
      <section className="product-results">
        <ProductTitle>Holiday Resorts in Greece</ProductTitle>
        {error ? (
          <div className="error-message">
            <p>Sorry there has been a problem with your request</p>
          </div>
        ) : (
          <Flex as="ul" flexWrap="wrap" className="product-results__list">
            {filteredHolidays.map((holiday, index) => (
              <Flex
                as="li"
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                width={[1, 1 / 2, 1 / 4]}
                p={2}
              >
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
