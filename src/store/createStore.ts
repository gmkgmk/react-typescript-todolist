import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReduce from '@/reducer/index';
import rootSaga from '@/reducer/saga';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReduce,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
export default { ...store };
