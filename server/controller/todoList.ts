// 获取列表
import { response, fail } from '../utils/response';
import {
  createTodoList,
  findAllList,
  deleteListById,
  updateStatusById,
  updateContentById,
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

  response(ctx, { msg: '新增成功' }, success);
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
  const data = deleteListById(id);
  if (data) {
    response(ctx, { msg: '删除成功' });
  } else {
    fail(ctx, { msg: '删除失败,请重试' });
  }
};

export const updateTodoListStatus = async ctx => {
  const schema = yup.object().shape({
    id: yup.number('id must be number').required('value is Required'),
    status: yup.number('status must be number').required('value is Required'),
  });

  const { body } = ctx.request;
  const result = await schema.validate(body).catch(e => fail(ctx, e.message));
  if (!result) return;

  const data = updateStatusById(body);
  if (!data) {
    fail(ctx, { msg: '查询todolist失败' });
    return;
  }
  response(ctx, { data });
};

export const updateTodoListContent = async ctx => {
  const schema = yup.object().shape({
    id: yup.number('id must be number').required('value is Required'),
    content: yup.string('status must be number').required('value is Required'),
  });

  const { body } = ctx.request;
  const result = await schema.validate(body).catch(e => fail(ctx, e.message));
  if (!result) return;

  const data = updateContentById(body);
  if (!data) {
    fail(ctx, { msg: '查询todolist失败' });
    return;
  }
  response(ctx, { data });
};
