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

export default (state = initState, action: IActionType): any => {
  const { type, payload } = action;
  console.log('payload: ', payload);
  console.log('type: ', type);
  switch (type) {
    case 'FETCH_LIST':
      return {
        list: dataSource,
      };
    default:
      return state;
  }
};
