/**
 * 子路由:todolist;
 */
import * as todoListController from '../controller/todoListController';
const router = require('koa-router')();

const routers = router.get('/list', todoListController.getTodoList);

export default routers;
