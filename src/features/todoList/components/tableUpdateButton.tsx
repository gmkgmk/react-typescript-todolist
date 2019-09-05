import * as React from 'react';
import { connect } from 'react-redux';
import BaseModal from '@/components/baseModal';
import { Radio } from 'antd';
import { bindActionCreators, Dispatch } from 'redux';
import * as actions from '../actions';
import { RadioChangeEvent } from 'antd/lib/radio';
const { memo, useState } = React;

interface IProps {
  statusEnum: Record<string, any>;
  status: string;
  id: number;
  actions: {
    fetchTodoList: () => void;
    updateStatus: ({
      id,
      status,
    }: {
      id: number;
      status: string;
    }) => { success: boolean };
  };
}

const TodoListUpdateStatusButton = memo((props: IProps) => {
  const { statusEnum, status: defaultStatus, id, actions } = props;
  const [status, setStatus] = useState(defaultStatus);
  const handleOk = async (close?: () => void) => {
    const { success } = await actions.updateStatus({
      id,
      status,
    });
    if (success) {
      actions.fetchTodoList();
      close && close();
    }
  };
  const handleCancel = (close?: () => void) => {
    setStatus(defaultStatus);
    close && close();
  };

  const onChangeHandle = (event: RadioChangeEvent) => {
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

const mapStateToProps = (state: { todoList: object }) => {
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
)(TodoListUpdateStatusButton as React.ComponentType<any>);
