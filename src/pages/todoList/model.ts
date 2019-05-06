import { put, call } from 'redux-saga/effects';
import api from './services';
interface IActionType {
  type: string;
  payload: object;
}
interface IStateType {
  list: [object?];
  statusEnum: [object?];
}
const initState: IStateType = {
  list: [],
  statusEnum: [],
};

export default {
  namespace: 'todoList',
  state: initState,
  reducer: {
    FETCH_LIST(state: any, payload: any) {
      console.log('payload: ', payload);
      const { list } = payload;

      return {
        list,
      };
    },
    save(state: any, payload: any) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {
    *fetchList(action: IActionType) {
      const { result } = yield call(api.list);
      const { data } = result;
      console.log('data: ', data);
      yield put({
        type: 'FETCH_LIST',
        payload: {
          list: data,
        },
      });
    },
    *putTodoList(action: IActionType) {
      const { result } = yield call(api.addList);
      console.log('result: ', result);
    },
    *fetchStatusEnum() {
      const { result } = yield call(api.getStatusEnum);
      const { data } = result;
      yield put({
        type: 'save',
        payload: {
          statusEnum: data,
        },
      });
    },
  },
};
