import { put, call, takeEvery, takeLatest } from 'redux-saga/effects';
import api from './services';
interface IActionType {
  type: string;
  payload: object;
}

function* fetchList() {
  const { result } = yield call(api.list);
  const { data } = result;
  yield put({
    type: 'FETCH_LIST',
    payload: {
      list: data,
    },
  });
}

function* putTodoList(action: IActionType) {
  yield call(api.addList);
}

function* fetchStatusEnum() {
  const { result } = yield call(api.getStatusEnum);
  const { data } = result;
  yield put({
    type: 'save',
    payload: {
      statusEnum: data,
    },
  });
}

export function* watchTodoList() {
  yield takeEvery('FETCH_DATA_LIST', fetchList);
}

export function* addList() {
  yield takeLatest('PUT_TODO_LIST', putTodoList);
}

export function* statusEnum() {
  yield takeEvery('ENUM_STATUS', fetchStatusEnum);
}
