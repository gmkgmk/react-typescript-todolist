import { call, takeLatest } from 'redux-saga/effects';
import { IActionType } from '@/types/reduce';
import api from '../services';
import { TODOLIST_UPDATE_STATUS } from '../constants';

// sagas
export function* updateTodoListStatusHandle() {
  function* handle({ next, payload }) {
    const result = yield call(api.updateStatus, payload);
    next(result);
  }
  yield takeLatest(TODOLIST_UPDATE_STATUS, handle);
}

export function updateStatus(payload) {
  return {
    type: TODOLIST_UPDATE_STATUS,
    payload,
  };
}

export function reducer(state: any, action: IActionType) {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
}
