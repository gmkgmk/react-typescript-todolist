import { put, call, takeEvery } from 'redux-saga/effects';
import { IActionType } from '@/types/reduce';
import api from '../services';
import {
  TODOLIST_FETCH_STATUS_ENUM,
  TODOLIST_FETCH_STATUS_ENUM_SUCCESS,
} from '../constants';

// sagas
export function* fetchStatusEnumHandle() {
  function* handle() {
    const { result } = yield call(api.getStatusEnum);
    const { data } = result;

    yield put({
      type: TODOLIST_FETCH_STATUS_ENUM_SUCCESS,
      payload: data,
    });
  }
  yield takeEvery(TODOLIST_FETCH_STATUS_ENUM, handle);
}

export function fetchStatusEnum() {
  return {
    type: TODOLIST_FETCH_STATUS_ENUM,
  };
}

export function reducer(state: any, action: IActionType) {
  const { payload, type } = action;
  switch (type) {
    case TODOLIST_FETCH_STATUS_ENUM_SUCCESS:
      return {
        ...state,
        statusEnum: payload,
      };
    default:
      return state;
  }
}
