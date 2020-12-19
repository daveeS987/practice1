import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import results from './result.js';

const reducers = combineReducers({
  results
})

const store = () => {
  return createStore( reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}

export default store();