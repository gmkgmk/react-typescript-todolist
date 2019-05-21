import * as React from 'react';
import { connect } from 'react-redux';
import { Table, Popconfirm, Icon, message, Spin, Button, Badge } from 'antd';
import enumsTool from '@/utils/enums';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import TableUpdateButton from './tableUpdateButton';
import TableUpdateContent from './TableUpdateContent';
const { useEffect } = React;

const TodoListTable = React.memo((props: any) => {
  const { actions, list, statusEnum, loading } = props;
  useEffect(() => {
    actions.fetchTodoList();
    actions.fetchStatusEnum();
  }, [actions]);

  const remove = async (id: number) => {
    const { success } = await actions.removeTodoList({
      id,
    });
    if (success) {
      message.success('删除成功');
      actions.fetchTodoList();
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
        return (
          <span>
            <Badge
              status={['error', 'success', 'processing'].find(
                (e, i) => i === text
              )}
              text={enumsTool(text, statusEnum)}
            />
          </span>
        );
      },
    },
    {
      title: '操作',
      key: 'action',
      render: (record: any) => (
        <div>
          <Popconfirm
            title="确认删除？"
            icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
            onConfirm={() => remove(record.id)}
          >
            <Button type="link">删除</Button>
          </Popconfirm>
          <TableUpdateButton status={record.status} id={record.id} />
          <TableUpdateContent content={record.content} id={record.id} />
        </div>
      ),
    },
  ];

  return (
    <Spin spinning={loading}>
      <Table dataSource={list} columns={columns} rowKey="id" />
    </Spin>
  );
});
const mapStateToProps = (state: any) => {
  const { todoList } = state;
  return {
    ...todoList,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListTable);
