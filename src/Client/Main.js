import axios from 'axios';
import 'babel-polyfill';
import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from '../Helpers/rootReducer';
import Routes from '../Helpers/router';

const axiosInstance = axios.create({
  baseURL: process.env.BaseUrl,
});

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer =
  process.env.NODE_ENV === 'production' ? composeEnhancers(applyMiddleware(thunk.withExtraArgument(axiosInstance))) : composeEnhancers(applyMiddleware(thunk.withExtraArgument(axiosInstance), logger));

const store = createStore(reducers, window.INITIAL_STATE, enhancer);

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <React.Fragment>{renderRoutes(Routes)}</React.Fragment>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
