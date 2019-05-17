import * as React from 'react';
import { connect } from 'react-redux';
import { Table, Popconfirm, Icon, message } from 'antd';
import enumsTool from '@/utils/enums';
const { useEffect } = React;

const TodoListTable = React.memo((props: any) => {
  const { list, dispatch, statusEnum } = props;
  useEffect(() => {
    dispatch({ type: 'FETCH_DATA_LIST' });
    dispatch({ type: 'ENUM_STATUS' });
  }, [dispatch]);

  const remove = async (id: number) => {
    const { success } = await dispatch({
      type: 'REMOVE_TODO_LIST',
      payload: {
        id,
      },
    });
    if (success) {
      message.success('删除成功');
      dispatch({ type: 'FETCH_DATA_LIST' });
    }
  };

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
      render: record => (
        <span>
          <Popconfirm
            title="确认删除？"
            icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
            onConfirm={() => remove(record.id)}
          >
            <a href="#">删除</a>
          </Popconfirm>
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
