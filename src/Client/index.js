import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { hydrate } from 'react-dom';
import { logger } from 'redux-logger';
import React from 'react';
import thunk from 'redux-thunk';
import axios from 'axios';
import reducers from '../Helpers/rootReducer';
import Routes from '../Helpers/router';
import API from '../Helpers/endpoints';
import 'babel-polyfill';

const axiosInstance = axios.create({
  baseURL: API.BaseUrl,
});

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk.withExtraArgument(axiosInstance), logger));

const store = createStore(reducers, window.INITIAL_STATE, enhancer);

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <React.Fragment>{renderRoutes(Routes)}</React.Fragment>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
