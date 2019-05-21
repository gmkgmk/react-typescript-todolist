import * as React from 'react';
import { connect } from 'react-redux';
import BaseModal from '@/components/baseModal';
import { Radio } from 'antd';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
const { memo, useState } = React;

const TodoListUpdateStatusButton = memo((props: any) => {
  const { statusEnum, status: defaultStatus, id, actions } = props;
  const [status, setStatus] = useState(defaultStatus);
  const handleOk = async close => {
    const { success } = await actions.updateStatus({
      id,
      status,
    });
    if (success) {
      actions.fetchTodoList();
      close();
    }
  };
  const handleCancel = close => {
    setStatus(defaultStatus);
    close();
  };

  const onChangeHandle = event => {
    const value = event.target.value;
    setStatus(value);
  };
  return (
    <BaseModal
      btnText="修改状态"
      title="修改状态"
      type="link"
      handleOk={handleOk}
      handleCancel={handleCancel}
    >
      <Radio.Group value={status} onChange={onChangeHandle}>
        {statusEnum.map((e: { key: number; value: string }) => (
          <Radio key={e.key} value={e.key}>
            {e.value}
          </Radio>
        ))}
      </Radio.Group>
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
)(TodoListUpdateStatusButton);
