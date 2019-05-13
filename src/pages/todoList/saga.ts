import { put, call, takeEvery } from 'redux-saga/effects';
import api from './services';
interface IActionType {
  type: string;
  payload: object;
}

function* fetchList() {
  const { result } = yield call(api.list);
  const { data } = result;
  console.log('data: ', data);
  yield put({
    type: 'FETCH_LIST',
    payload: {
      list: data,
    },
  });
}

function* putTodoList(action: IActionType) {
  const { result } = yield call(api.addList);
  console.log('result: ', result);
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
  yield takeEvery('PUT_TODO_LIST', putTodoList);
}

export function* statusEnum() {
  yield takeEvery('ENUM_STATUS', fetchStatusEnum);
}
