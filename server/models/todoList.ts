import { todoListModel } from '../schema/todoList';
import { todoList } from './../db/index';

export const createTodoList = (content: string) => {
  const result = todoListModel(content);
  todoList.push(result);
  console.log('todoList: ', todoList);
  return true;
};

export const findAllList = () => {
  return todoList;
};
