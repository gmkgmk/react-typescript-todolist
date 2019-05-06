// 获取列表
import { response } from '../utils/response';
import { createTodoList, findAllList } from './../models/todoList';
import { todoListEnumData } from './../schema/todoList';
import yup from 'yup';

export const getTodoList = async ctx => {
  response(ctx, { data: findAllList() });
};
export const createList = async ctx => {
  // const rules = yup.object().shape({
  //   content: yup.string().required(),
  // });
  const { content } = ctx.request.body;
  const success = createTodoList(content);

  response(ctx, { data: success }, success);
};

export const statusEnum = async ctx => {
  const data = todoListEnumData.map((e, idx) => {
    return {
      value: e,
      key: idx,
    };
  });
  response(ctx, { data });
};
