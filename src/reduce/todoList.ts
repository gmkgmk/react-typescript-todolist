import { put, delay } from 'redux-saga';
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

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];
export default {
  namespace: 'todoList',
  state: initState,
  reducer: {
    FETCH_LIST() {
      return {
        list: dataSource,
      };
    },
  },
  effects: {
    *fetchUser(action: IActionType) {
      console.log('action: ', action);
      yield delay(1000);
      yield put({ type: 'INCREMENT' });
    },
  },
};
