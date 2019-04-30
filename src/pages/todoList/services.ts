import request from '@utils/request';
export default {
  list: () => request('/api/todoList/list'),
};
