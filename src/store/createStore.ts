import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reduceReducers';
import createSaga from './sagaGenerater';
import reducers from './../reducer';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
const sagaMiddleware = createSagaMiddleware();

const rootReducer = createReducer(reducers);

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(createSaga(reducers));
export default { ...store };
