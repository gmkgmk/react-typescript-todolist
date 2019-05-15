import * as React from 'react';
import TodoListTable from './components/todoListTable';
import TodoListForm from './components/todoListForm';
export default () => {
  return (
    <>
      <TodoListForm />
      <TodoListTable />
    </>
  );
};
