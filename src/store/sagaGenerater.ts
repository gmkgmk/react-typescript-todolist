import { all, fork } from 'redux-saga/effects';

const reducerSaga = (obj: { [key: string]: any }) => {
  return Object.keys(obj).reduce((p, r: string) => {
    p[r] = obj[r].effects ? obj[r].effects : () => {};
    return p;
  }, {});
};
const generaterRoot = (reducerMap: any) => {
  const rootSaga: any = reducerSaga(reducerMap);
  function* root(): any {
    const sagaArr = [];
    for (const i in rootSaga) {
      if (rootSaga.hasOwnProperty(i)) {
        sagaArr.push(fork(rootSaga[i]['fetchUser']));
      }
    }
    yield all(sagaArr);
  }
  return root;
};

export default generaterRoot;
