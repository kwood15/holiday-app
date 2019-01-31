import React from 'react';
import ProductList from '../../Product/ProductList';
import SearchContext from '.';

const WithSearchContext = () => (
  <SearchContext.Consumer>
    {searchTerm => <ProductList searchTerm={searchTerm} />}
  </SearchContext.Consumer>
);

export default WithSearchContext;
