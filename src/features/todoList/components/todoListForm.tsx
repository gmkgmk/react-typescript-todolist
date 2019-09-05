import * as React from 'react';
import { connect } from 'react-redux';
import BaseModal from '@/components/baseModal';
import { Input, message } from 'antd';
import _ from 'lodash';
import { bindActionCreators, Dispatch } from 'redux';
import * as actions from '../actions';
const { memo, useState } = React;
interface IActionProps {
  actions: {
    addTodoList: ({ value }: { value: string }) => Promise<any>;
    fetchTodoList: () => void;
  };
}
const TodoListForm = memo((props: IActionProps) => {
  const [inputValue, changeInputValue] = useState('');
  const { actions } = props;

  const addList = async (value: string) => {
    if (_.isEmpty(value)) {
      message.error('内容不能为空');
      return;
    }
    const result = await actions.addTodoList({
      value,
    });
    return result;
  };

  const onChange = (event: React.BaseSyntheticEvent) => {
    const value = event.target.value;
    changeInputValue(value);
  };
  // 确定按钮动作
  const handleOk = async (close?: () => void) => {
    const { success } = await addList(inputValue);
    if (success) {
      message.success('新增成功');
      actions.fetchTodoList();
      changeInputValue('');
      close && close();
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
const mapStateToProps = () => {
  return {};
};

/* istanbul ignore next */
function mapDispatchToProps(dispatch: Dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListForm as React.ComponentType<any>);
