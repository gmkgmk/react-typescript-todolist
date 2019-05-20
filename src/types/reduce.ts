import redux from 'redux';
export interface IReducerType {
  [key: string]: redux.Reducer;
}

export interface IActionType {
  type: string;
  payload: object;
  rest?: any[];
}
