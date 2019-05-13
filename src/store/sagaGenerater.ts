import { spawn } from 'redux-saga/effects';
import * as todoList from '@/pages/todoList/saga';
export default function* root() {
  const rootSaga = { ...todoList };
  for (let i in rootSaga) {
    if (rootSaga.hasOwnProperty(i)) {
      yield spawn(rootSaga[i]);
    }
  }
}
