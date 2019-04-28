import * as React from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';
const { useEffect } = React;

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];

const TodoList = (props: any) => {
  const { list } = props;
  useEffect(() => {
    const { dispatch } = props;
    dispatch({ type: 'FETCH_LIST' });
  }, []);

  return <Table dataSource={list} columns={columns} />;
};
const mapStateToProps = (state: any) => {
  const { todoList } = state;
  return {
    ...todoList,
  };
};

const TodoListPage = connect(mapStateToProps)(TodoList);
export default TodoListPage;
