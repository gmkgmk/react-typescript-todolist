interface IStateType {
  list: [any?];
  statusEnum: [any?];
  loading: boolean;
}

const initialState: IStateType = {
  list: [],
  statusEnum: [],
  loading: false,
};

export default initialState;
