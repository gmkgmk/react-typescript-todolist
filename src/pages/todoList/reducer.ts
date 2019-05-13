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

export default function reducer(
  state = initState,
  action: IActionType = { type: 'empty', payload: {} }
) {
  const { payload, type } = action;
  switch (type) {
    case 'FETCH_LIST':
      return {
        ...state,
        ...payload,
      };
    case 'save':
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
}
