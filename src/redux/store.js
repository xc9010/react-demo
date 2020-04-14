import {createStore,applyMiddleware,compose} from 'redux';
import createSagaMiddleware from 'redux-saga'
import thunkMiddleware from 'redux-thunk';
import combineReducers from './reducers.js';

import rootSaga from "../main-saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(combineReducers, compose(
  applyMiddleware(sagaMiddleware, thunkMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
));
sagaMiddleware.run(rootSaga);

export default store;
