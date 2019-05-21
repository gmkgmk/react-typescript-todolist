import * as React from 'react';
import { connect } from 'react-redux';
import BaseModal from '@/components/baseModal';
import { Input } from 'antd';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
const { memo, useState } = React;

const TodoListUpdateContent = memo((props: any) => {
  const { content: defaultContent, id, actions } = props;
  const [content, setContent] = useState(defaultContent);
  const handleOk = async close => {
    const { success } = await actions.updateContent({
      id,
      content,
    });
    if (success) {
      actions.fetchTodoList();
      close();
    }
  };
  const handleCancel = close => {
    setContent(defaultContent);
    close();
  };

  const onChangeHandle = event => {
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
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListUpdateContent);
