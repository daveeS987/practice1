import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import results from './result.js';
import savedList from './savedList.js';

const reducers = combineReducers({
  results, savedList
})

const store = () => {
  return createStore( reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}

export default store();