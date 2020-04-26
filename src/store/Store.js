import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers/index';

let composeEnhancers = null;
if (process.env.NODE_ENV === 'development') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} else {
  composeEnhancers = compose;
}
//@ middleware
const Store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunk))
);

export default Store;
