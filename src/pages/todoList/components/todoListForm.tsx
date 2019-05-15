import * as React from 'react';
import { connect } from 'react-redux';
import AddButton from './addModel';
import { Input } from 'antd';
const TodoListForm = (props: any) => {
  console.log('props: ', props);
  // const { dispatch } = props;
  // const addList = async () => {
  //   await dispatch({ type: 'PUT_TODO_LIST' });
  //   dispatch({ type: 'FETCH_DATA_LIST' });
  // };
  return (
    // <Button type="primary" onClick={addList}>
    //   Primary
    // </Button>
    <AddButton btnText="新增" title="新增todoList">
      <Input placeholder="Basic usage" />
    </AddButton>
  );
};
const mapStateToProps = (state: any) => {
  return {};
};

const TodoListFormPage = connect(mapStateToProps)(TodoListForm);
export default TodoListFormPage;
