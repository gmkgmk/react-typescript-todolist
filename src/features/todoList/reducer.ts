import initialState from './actions/initialState';
import { IActionType } from '@/types/reduce';

import { reducer as fetchStatusEnum } from './actions/fetchStatusEnum';
import { reducer as fetchTodoList } from './actions/fetchTodoList';
import { reducer as addTodoList } from './actions/addTodoList';

const reducers: any[] = [fetchStatusEnum, addTodoList, fetchTodoList];

export default function reducer(state = initialState, action: IActionType) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  return reducers.reduce((s, r) => r(s, action), newState);
}
