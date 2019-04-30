import { put, call } from 'redux-saga/effects';
import api from './services';
interface IActionType {
  type: string;
  payload: object;
}
interface IStateType {
  list: [object?];
}
const initState: IStateType = {
  list: [],
};

export default {
  namespace: 'todoList',
  state: initState,
  reducer: {
    FETCH_LIST(state: any, payload: any) {
      const { list } = payload;
      return {
        list,
      };
    },
  },
  effects: {
    *fetchUser(action: IActionType) {
      const result = yield call(api.list);

      yield put({
        type: 'todoList/FETCH_LIST',
        payload: {
          list: result,
        },
      });
    },
  },
};
