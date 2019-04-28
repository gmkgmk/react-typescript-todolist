import todoList from './todoList';
import { combineReducers } from 'redux';
import reduceReducers from './reduceReducers';

const reducerMap = reduceReducers({
  todoList,
});

const rootReducer = combineReducers(reducerMap);

export default rootReducer;
