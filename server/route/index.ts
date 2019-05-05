'use strict';

import KoaRouter from 'koa-router';
import todoList from './todolist';

const Router = new KoaRouter({
  prefix: '/api',
});
// todoList模块
Router.use('/todoList', todoList.routes(), todoList.allowedMethods());

export default Router;
