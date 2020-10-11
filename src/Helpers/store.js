import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import reducers from './rootReducer';
import API from './endpoints';

export default (req) => {
  const axiosInstance = axios.create({
    baseURL: API.BaseUrl,
    headers: { cookie: req.get('cookie') || '' },
  });
  const store = createStore(reducers, {}, applyMiddleware(thunk.withExtraArgument(axiosInstance)));
  return store;
};
