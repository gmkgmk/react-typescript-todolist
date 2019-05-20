import request from '@utils/request';
export default {
  list: () => request('/api/todoList/list'),
  getStatusEnum: () => request('/api/todoList/statusEnum'),
  removeList: (data: object) =>
    request('/api/todoList/removeList', { method: 'POST', data }),
  addList: (data: object) =>
    request('/api/todoList/add', { method: 'POST', data }),
};
