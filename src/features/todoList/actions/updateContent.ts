import { call, takeLatest } from 'redux-saga/effects';
import { IActionType } from '@/types/reduce';
import api from '../services';
import { TODOLIST_UPDATE_CONTENT } from '../constants';

// sagas
export function* updateTodoListContentHandle() {
  function* handle({ next, payload }) {
    const result = yield call(api.updateContent, payload);
    next(result);
  }
  yield takeLatest(TODOLIST_UPDATE_CONTENT, handle);
}

export function updateContent(payload) {
  return {
    type: TODOLIST_UPDATE_CONTENT,
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
