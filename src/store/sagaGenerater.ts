import { all, fork } from 'redux-saga/effects';

const NAMESPACE_SEP = '/';
// 添加前缀
function prefix(effects) {
  let sagas: any = {};
  Object.keys(effects).map(e => {
    for (const i in effects[e]) {
      if (effects[e].hasOwnProperty(i)) {
        const newKey: string = `${e}${NAMESPACE_SEP}${i}`;
        sagas[newKey] = effects[e][i];
      }
    }
  });
  return sagas;
}
const reducerSaga = (obj: { [key: string]: any }) => {
  const effects = Object.keys(obj).reduce((p, r: string) => {
    p[r] = obj[r].effects ? obj[r].effects : {};
    return p;
  }, {});
  return prefix(effects);
};

const generaterRoot = (reducerMap: any) => {
  const rootSaga: any = reducerSaga(reducerMap);
  function* root(): any {
    const sagaArr = [];
    for (const i in rootSaga) {
      if (rootSaga.hasOwnProperty(i)) {
        sagaArr.push(yield fork(rootSaga[i]));
      }
    }
    console.log('sagaArr: ', sagaArr);
    yield all(sagaArr);
  }
  return root;
};

export default generaterRoot;
