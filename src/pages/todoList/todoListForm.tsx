import * as React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

const TodoListForm = (props: any) => {
  // const { dispatch } = props;
  const addList = async () => {
    console.log('执行');
    // await dispatch({ type: 'putTodoList' });
    // dispatch({ type: 'fetchList' });
  };
  return (
    <Button type="primary" onClick={addList}>
      Primary
    </Button>
  );
};
const mapStateToProps = (state: any) => {
  return {};
};

const TodoListFormPage = connect(mapStateToProps)(TodoListForm);
export default TodoListFormPage;
