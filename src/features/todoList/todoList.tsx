import * as React from 'react';
import TodoListTable from './components/todoListTable';
import TodoListForm from './components/todoListForm';
export default () => {
  return (
    <section className="todoList-page">
      <TodoListForm />
      <TodoListTable />
    </section>
  );
};
