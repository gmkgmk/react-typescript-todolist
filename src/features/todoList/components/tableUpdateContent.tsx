import * as React from 'react';
import { connect } from 'react-redux';
import BaseModal from '@/components/baseModal';
import { Input } from 'antd';
import { bindActionCreators, Dispatch } from 'redux';
import * as actions from '../actions';
const { memo, useState } = React;

interface IProps {
  content: string;
  id: number;
  actions: any;
}
const TodoListUpdateContent = memo((props: IProps) => {
  const { content: defaultContent, id, actions } = props;
  const [content, setContent] = useState(defaultContent);
  const handleOk = async (close?: () => void) => {
    const { success } = await actions.updateContent({
      id,
      content,
    });
    if (success) {
      actions.fetchTodoList();
      close && close();
    }
  };
  const handleCancel = (close?: () => void) => {
    setContent(defaultContent);
    close && close();
  };

  const onChangeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setContent(value);
  };
  return (
    <BaseModal
      btnText="修改内容"
      title="修改内容"
      type="link"
      handleOk={handleOk}
      handleCancel={handleCancel}
    >
      <Input value={content} onChange={onChangeHandle} />
    </BaseModal>
  );
});
const mapStateToProps = (state: any) => {
  const { todoList } = state;
  return {
    ...todoList,
  };
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
)(TodoListUpdateContent);
