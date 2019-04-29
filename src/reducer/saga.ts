import todoList from './todoList';
import { all, fork } from 'redux-saga/effects';

export default function* root(): any {
  const rootSaga = { ...todoList.effects };
  const sagaArr = [];
  for (const i in rootSaga) {
    if (rootSaga.hasOwnProperty(i)) {
      sagaArr.push(fork(rootSaga[i]));
    }
  }
  yield all(sagaArr);
}
