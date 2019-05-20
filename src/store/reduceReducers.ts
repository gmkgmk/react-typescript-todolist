import { combineReducers } from 'redux';
import todoList from '@/features/todoList/reducer';
const reducers = {
  todoList,
};

export default () => combineReducers(reducers);
