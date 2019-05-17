import { todoListModel } from '../schema/todoList';
import { todoList } from './../db/index';

export const createTodoList = (content: string) => {
  const result = todoListModel(content);
  todoList.push(result);
  return true;
};

export const findAllList = () => {
  return todoList;
};

export const deleteListById = (id: number) => {
  const index = todoList.findIndex(e => e.id === id);
  if (index) {
    todoList.splice(index, 1);
    return true;
  }
};
