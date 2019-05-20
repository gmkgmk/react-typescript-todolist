import { call, takeLatest } from 'redux-saga/effects';
import { IActionType } from '@/types/reduce';
import api from '../services';
import { TODOLIST_ADD_LIST } from '../constants';

// sagas
export function* addTodoListHandle() {
  function* handle({ next, payload }) {
    const result = yield call(api.addList, payload);
    next(result);
  }
  yield takeLatest(TODOLIST_ADD_LIST, handle);
}

export function addTodoList(payload) {
  return {
    type: TODOLIST_ADD_LIST,
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
