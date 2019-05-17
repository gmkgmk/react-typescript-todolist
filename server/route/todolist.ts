/**
 * 子路由:todolist;
 */
import * as todoListController from '../controller/todoList';
import KoaRouter from 'koa-router';
const router = KoaRouter();

const routers = router
  .get('/list', todoListController.getTodoList)
  .get('/statusEnum', todoListController.statusEnum)
  .post('/add', todoListController.createList)
  .post('/removeList', todoListController.removeList);

export default routers;
