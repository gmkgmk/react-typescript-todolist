import { call, takeLatest } from 'redux-saga/effects';
import { IActionType } from '@/types/reduce';
import api from '../services';
import { TODOLIST_REMOVE_LIST } from '../constants';

// sagas
export function* removeTodoListHandle() {
  function* handle({ next, payload }) {
    const result = yield call(api.removeList, payload);
    next(result);
  }
  yield takeLatest(TODOLIST_REMOVE_LIST, handle);
}

export function removeTodoList(payload) {
  return {
    type: TODOLIST_REMOVE_LIST,
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
