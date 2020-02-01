import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers/index';

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

//@ middleware
const Store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunk))
);

export default Store;
