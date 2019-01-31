import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../Home';
import ProductDetailView from '../../Product/ProductDetailView';
import WithSearchContext from '../Search/SearchContextConsumer';

export const Main = () => (
  <main className="main-content">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/holidays" component={WithSearchContext} />
      <Route path="/holiday/:seoPath/:productId" component={ProductDetailView} />
    </Switch>
  </main>
);
