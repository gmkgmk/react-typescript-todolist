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
  const { state: initSate, namespace } = model;
  return (state: object = {}, action: IActionType): (() => {}) => {
    const { type, payload, ...rest } = action;

    const prefixType = `${namespace}${NAMESPACE_SEP}${type}`;
    console.info('namespace/reduce: ', prefixType);
    // 调用时先查看自己model是否有
    const reduce = reducers[prefixType] ? reducers[prefixType] : reducers[type];
    return reduce ? reduce(state, payload, rest) : initSate;
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
