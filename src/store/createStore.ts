import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reduceReducers';
import rootSaga from './sagaGenerater';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  createReducer(),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
export default store;
