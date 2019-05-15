import { spawn, call, all } from 'redux-saga/effects';
import * as todoList from '@/pages/todoList/saga';
export default function* root() {
  const sagas = { ...todoList };
  const rootSaga = [];
  for (let i in sagas) {
    if (sagas.hasOwnProperty(i)) {
      rootSaga.push(sagas[i]);
    }
  }

  yield all(
    rootSaga.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga);
          } catch (e) {
            console.log(e);
          }
        }
      })
    )
  );
}
