// 获取列表
import { response, fail } from '../utils/response';
import {
  createTodoList,
  findAllList,
  deleteListById,
} from './../models/todoList';
import { todoListEnumData } from './../schema/todoList';
import * as yup from 'yup'; // for everything

export const getTodoList = async ctx => {
  response(ctx, { data: findAllList() });
};

/**
 * 新增list
 * @param {*} ctx
 * @returns
 */
export const createList = async ctx => {
  const schema = yup.object().shape({
    value: yup.string().required('value is Required'),
  });

  // check validity

  const { body } = ctx.request;
  const result = await schema.validate(body).catch(e => fail(ctx, e.message));

  if (!result) return;

  const param = body.value;
  const success = createTodoList(param);

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

export const removeList = async ctx => {
  const schema = yup.object().shape({
    id: yup.number('id must be number').required('value is Required'),
  });

  // check validity

  const { body } = ctx.request;
  const result = await schema.validate(body).catch(e => fail(ctx, e.message));

  if (!result) return;
  const { id } = body;
  deleteListById({ id });
  response(ctx, { msg: '删除成功' });
};
