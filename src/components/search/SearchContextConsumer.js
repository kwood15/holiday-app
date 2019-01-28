import React from 'react';
import ProductList from '../product/ProductList';
import SearchContext from './SearchContext';

const WithSearchContext = () => (
  <SearchContext.Consumer>
    {searchTerm => <ProductList searchTerm={searchTerm} />}
  </SearchContext.Consumer>
);

export default WithSearchContext;
