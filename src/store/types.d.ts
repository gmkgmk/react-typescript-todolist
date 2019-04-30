import redux from 'redux';
export interface IReducerType {
  [key: string]: redux.Reducer;
}

export interface IActionType {
  type: string;
  payload: object;
  rest?: any[];
}

export interface IPrefix {
  namespace: Readonly<string>;
  reducer: {
    [key: string]: redux.Reducer;
  };
}
export interface IModel {
  namespace: string;
  state: object;
  reducer: {
    [key: string]: redux.Reducer;
  };
  [key: string]: any;
}
