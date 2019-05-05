/**
 * 子路由:todolist;
 */
import * as todoListController from '../controller/todoList';
import KoaRouter from 'koa-router';
const router = KoaRouter();

const routers = router
  .get('/list', todoListController.getTodoList)
  .post('/add', todoListController.createList);

export default routers;
