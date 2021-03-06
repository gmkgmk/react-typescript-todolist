import { put, call, takeLatest, delay } from 'redux-saga/effects';
import { IActionType } from '@/types/reduce';
import api from '../services';
import {
  TODOLIST_FETCH_LIST,
  TODOLIST_FETCH_LIST_SUCCESS,
  TODOLIST_LOADING_START,
  TODOLIST_LOADING_END,
} from '../constants';

// sagas
export function* fetchTodoListHandle() {
  function* handle() {
    yield put({
      type: TODOLIST_LOADING_START,
    });
    const { result } = yield call(api.list);
    const { data } = result;

    yield delay(500);
    yield put({
      type: TODOLIST_FETCH_LIST_SUCCESS,
      payload: data,
    });
    yield put({
      type: TODOLIST_LOADING_END,
    });
  }
  yield takeLatest(TODOLIST_FETCH_LIST, handle);
}

export function fetchTodoList() {
  return {
    type: TODOLIST_FETCH_LIST,
  };
}

export function reducer(state: any, action: IActionType) {
  const { payload, type } = action;
  switch (type) {
    case TODOLIST_FETCH_LIST_SUCCESS:
      return {
        ...state,
        list: payload,
      };
    default:
      return state;
  }
}
