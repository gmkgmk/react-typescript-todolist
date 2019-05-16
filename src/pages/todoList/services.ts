import request from '@utils/request';
export default {
  list: () => request('/api/todoList/list'),
  getStatusEnum: () => request('/api/todoList/statusEnum'),
  addList: (data: object) =>
    request('/api/todoList/add', { method: 'POST', data }),
};
