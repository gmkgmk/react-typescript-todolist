import * as React from 'react';
import { connect } from 'react-redux';
import BaseModal from '@/components/baseModal';
import { Input, message } from 'antd';
import _ from 'lodash';
const { memo, useState } = React;
const TodoListForm = memo((props: any) => {
  const [inputValue, changeInputValue] = useState('');
  const { dispatch } = props;

  const addList = async (value: string) => {
    if (_.isEmpty(value)) {
      message.error('内容不能为空');
      return;
    }
    const result = await dispatch({
      type: 'PUT_TODO_LIST',
      payload: {
        value,
      },
    });
    return result;
  };

  const onChange = (event: React.BaseSyntheticEvent) => {
    const value = event.target.value;
    changeInputValue(value);
  };
  // 确定按钮动作
  const handleOk = async (close: () => void) => {
    const { success } = await addList(inputValue);
    if (success) {
      message.success('新增成功');
      dispatch({
        type: 'FETCH_DATA_LIST',
      });
      changeInputValue('');
      close();
    }
  };
  return (
    <BaseModal btnText="新增" title="新增todoList" handleOk={handleOk}>
      <Input
        placeholder="请输入todoList内容"
        allowClear
        value={inputValue}
        onChange={onChange}
      />
    </BaseModal>
  );
});

const mapStateToProps = (state: any) => {
  return {};
};

const TodoListFormPage = connect(mapStateToProps)(TodoListForm);
export default TodoListFormPage;
