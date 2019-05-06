import * as Types from './../types/index';
let _id = 0;

/**
 * 0:开始
 * 1:正在进行
 * 2:结束`
 */
export const todoListEnumData = ['开始', '正在进行', '结束'];
export enum todoListEnum {
  START,
  DOING,
  DONE,
}
/**
 *
 *
 * @param {*} content
 * @param {*} status
 * @returns {ITodoList}
 */
export const todoListModel = (content: string): Types.ITodoList => {
  const id: number = _id++;
  return {
    id,
    content,
    status: todoListEnum.START,
  };
};
