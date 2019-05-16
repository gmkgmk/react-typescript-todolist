import * as React from 'react';
import { connect } from 'react-redux';
import BaseModal from '@/components/baseModal';
import { Input, message } from 'antd';
const { memo, useState } = React;

const TodoListForm = memo((props: any) => {
  const [inputValue, changeInputValue] = useState('');
  const { dispatch } = props;

  const addList = async (value: string) => {
    const result = await dispatch({
      type: 'PUT_TODO_LIST',
      payload: {
        value,
      },
    });
    console.log('result: ', result);
  };

  const onChange = (event: React.BaseSyntheticEvent) => {
    const value = event.target.value;
    changeInputValue(value);
  };
  const handleOk = async (close: () => void) => {
    const result = await addList(inputValue);
    console.log('result: ', result);
    message.success('新增成功');
    dispatch({
      type: 'FETCH_DATA_LIST',
    });
    close();
  };
  return (
    <BaseModal btnText="新增" title="新增todoList" handleOk={handleOk}>
      <Input
        placeholder="input with clear icon"
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
