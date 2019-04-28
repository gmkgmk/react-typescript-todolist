import todoList from './todoList';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  todoList,
});

export default rootReducer;
