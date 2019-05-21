import initialState from './initialState';
import { IActionType } from '@/types/reduce';
import { TODOLIST_LOADING_START, TODOLIST_LOADING_END } from './constants';

import { reducer as fetchStatusEnum } from './actions/fetchStatusEnum';
import { reducer as fetchTodoList } from './actions/fetchTodoList';
import { reducer as addTodoList } from './actions/addTodoList';

const reducers: any[] = [fetchStatusEnum, addTodoList, fetchTodoList];

export default function reducer(state = initialState, action: IActionType) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    case TODOLIST_LOADING_START:
      newState = {
        ...state,
        loading: true,
      };
      break;
    case TODOLIST_LOADING_END:
      newState = {
        ...state,
        loading: false,
      };
      break;
    default:
      newState = state;
      break;
  }
  return reducers.reduce((s, r) => r(s, action), newState);
}
