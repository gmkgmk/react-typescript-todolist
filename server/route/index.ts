'use strict';

import router from 'koa-router';
import todoList from './todolist';

const Router = new router({
  prefix: '/api',
});
// 用户模块
Router.use('/todoList', todoList.routes(), todoList.allowedMethods());

export default Router;
