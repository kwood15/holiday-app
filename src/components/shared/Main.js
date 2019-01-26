import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductDetailView from '../product/ProductDetailView';
import WithSearchContext from '../search/SearchContextConsumer';

export const Main = () => (
  <main className="main-content">
    <Switch>
      <Route exact path="/" />
      <Route path="/holidays" component={WithSearchContext} />
      <Route path="/holiday/:seoPath/:productId" component={ProductDetailView} />
    </Switch>
  </main>
);
