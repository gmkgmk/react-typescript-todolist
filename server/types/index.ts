import * as todoList from './../schema/todoList';
export interface ITodoList {
  id?: number;
  content: string;
  status: todoList.todoListEnum;
}
