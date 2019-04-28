import * as redux from 'redux';
console.log('redux: ', redux);
const NAMESPACE_SEP: string = '/';

interface IActionType {
  type: string;
  payload: object;
  rest?: any[];
}
interface prefixFunc {
  string?: object;
}
interface IPrefix {
  namespace: Readonly<string>;
  reducer: {
    [key: string]: redux.Reducer;
  };
}

// 添加前缀
function prefix({ namespace, reducer }: IPrefix): prefixFunc {
  return Object.keys(reducer).reduce(
    (memo: { [key: string]: redux.Reducer }, key: string) => {
      const newKey: string = `${namespace}${NAMESPACE_SEP}${key}`;

      memo[newKey] = reducer[key];
      return memo;
    },
    {}
  );
}

interface IModel {
  namespace: string;
  state: object;
  reducer: {
    [key: string]: redux.Reducer;
  };
  [key: string]: any;
}
// 生成reducer
const reducerHandle = (model: IModel) => {
  const reducers: any = prefix(model);
  const { state: initSate } = model;
  return (state: object = {}, action: IActionType): (() => {}) => {
    const { type, payload, ...rest } = action;
    return reducers[type] ? reducers[type](state, payload, ...rest) : initSate;
  };
};

export default (obj: IModel) => {
  return Object.keys(obj).reduce((p: any, r: string) => {
    obj[r] = reducerHandle(obj[r]);
    return obj;
  }, {});
};
