import TodoList from './todoList';
import Layout from './../layout';
export default {
  path: 'todoList',
  name: 'todoList',
  component: Layout,
  childRoutes: [{ path: '', name: 'todolist list', component: TodoList }],
};
