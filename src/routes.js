import React from 'react';
import { Route } from 'react-router';
import App from './components/App';
import MainContainer from './components/marvel/MainContainer';

export default(
  <App>
    <Route exact path="/" component={MainContainer} />
  </App>
);