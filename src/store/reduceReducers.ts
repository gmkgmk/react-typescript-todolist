/* eslint-disable @typescript-eslint/no-explicit-any */
import { IReducerType, IActionType, IPrefix, IModel } from './types';
import { combineReducers } from 'redux';

const NAMESPACE_SEP = '/';
// 添加前缀
function prefix({ namespace, reducer }: IPrefix): { string?: object } {
  return Object.keys(reducer).reduce((memo: IReducerType, key: string) => {
    const newKey: string = `${namespace}${NAMESPACE_SEP}${key}`;

    memo[newKey] = reducer[key];
    return memo;
  }, {});
}

// 生成reducer
const reducerHandle = (model: IModel) => {
  const reducers: any = prefix(model);
  const { state: initSate } = model;
  return (state: object = {}, action: IActionType): (() => {}) => {
    const { type, payload, ...rest } = action;
    console.info('reduce-type: ', type);
    return reducers[type] ? reducers[type](state, payload, rest) : initSate;
  };
};

const reduceReducers = (obj: { [key: string]: any }) => {
  return Object.keys(obj).reduce((p, r: string) => {
    p[r] = reducerHandle(obj[r]);
    return p;
  }, {});
};

const rootReducer = (reducerMap: any) =>
  combineReducers(reduceReducers(reducerMap));

export default rootReducer;
