import * as React from 'react';
import TodoListTable from './todoListTable';
import TodoListForm from './todoListForm';
export default () => {
  return (
    <>
      <TodoListForm />
      <TodoListTable />
    </>
  );
};
