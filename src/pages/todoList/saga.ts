import { put, call, takeEvery, takeLatest } from 'redux-saga/effects';
import api from './services';
interface IActionType {
  type: string;
  payload: any;
  next: (key?: string) => void;
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
  const { payload, next } = action;

  const result = yield call(api.addList, payload);
  next(result);
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

function* removeTodoList(action: IActionType) {
  const { payload, next } = action;
  const result = yield call(api.removeList, payload);
  next(result);
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

export function* removeHandle() {
  yield takeLatest('REMOVE_TODO_LIST', removeTodoList);
}
