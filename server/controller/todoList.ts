// 获取列表
import { response } from '../utils/response';
import { createTodoList, findAllList } from './../models/todoList';
import yup from 'yup';

export const getTodoList = async ctx => {
  response(ctx, { data: findAllList() });
};
export const createList = async ctx => {
  console.log('ctx: ', ctx.request.body);
  // const rules = yup.object().shape({
  //   content: yup.string().required(),
  // });
  const { content } = ctx.request.body;
  const success = createTodoList(content);

  response(ctx, { data: success }, success);
};
