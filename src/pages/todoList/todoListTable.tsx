import * as React from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';
import enumsTool from '@/utils/enums';
const { useEffect } = React;

const TodoListTable = React.memo((props: any) => {
  const { list, dispatch, statusEnum } = props;
  useEffect(() => {
    dispatch({ type: 'FETCH_DATA_LIST' });
    dispatch({ type: 'ENUM_STATUS' });
  }, [dispatch]);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '内容',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (text: number) => {
        return <span>{enumsTool(text, statusEnum)}</span>;
      },
    },
    {
      title: '操作',
      key: 'action',
      render: () => (
        <span>
          <a href="javascript:;">删除</a>
        </span>
      ),
    },
  ];

  return <Table dataSource={list} columns={columns} rowKey="id" />;
});
const mapStateToProps = (state: any) => {
  const { todoList } = state;
  return {
    ...todoList,
  };
};

const TodoListTableComponent = connect(mapStateToProps)(TodoListTable);
export default TodoListTableComponent;
