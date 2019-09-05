import * as React from 'react';
import { Button, Modal } from 'antd';
import { ModalProps } from 'antd/lib/modal';

const { memo, useState } = React;

interface IModelProps extends ModalProps {
  /** 按钮文字 */
  btnText?: string;
  /** 标题 */
  title?: React.ReactNode | string;
  children?: React.ReactNode;
  type?: 'primary' | 'ghost' | 'default' | 'dashed' | 'danger' | 'link';
  /** 确定按钮 loading */
  loading?: boolean;
  /** 是否显示右上角的关闭按钮 */
  closable?: boolean;
  footer?: [React.ReactNode] | null;
  width?: string | number;
  handleOk: (close?: () => void) => Promise<void>;
  handleCancel?: (
    close?: () => void,
    e?: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

export default memo(
  (props: IModelProps): React.ReactElement => {
    const modalEL = React.useRef<Modal>(null);
    const {
      btnText,
      children,
      title,
      loading = false,
      closable = false,
      footer,
      type = 'primary',
      width = 520,
      handleOk,
      handleCancel,
    } = props;
    const [visible, toggleVisible] = useState(false);
    const close: () => void = () => toggleVisible(false);
    const handleOkFunc: () => void = () => {
      handleOk ? handleOk(close) : close();
    };
    const handleCancelHandle: () => void = () => {
      handleCancel ? handleCancel(close) : close();
    };
    const defaultFooter: React.ReactElement[] = [
      <Button key="back" onClick={handleCancelHandle}>
        取消
      </Button>,
      <Button
        key="submit"
        type="primary"
        loading={loading}
        onClick={handleOkFunc}
      >
        确认
      </Button>,
    ];
    return (
      <>
        <Button
          type={type}
          onClick={() => {
            toggleVisible(true);
          }}
        >
          {btnText}
        </Button>
        <Modal
          width={width}
          closable={closable}
          footer={footer === undefined ? defaultFooter : footer}
          title={title}
          visible={visible}
          onOk={() => handleOk()}
          onCancel={handleCancelHandle}
          ref={modalEL}
        >
          {React.Children.only(children)}
        </Modal>
      </>
    );
  }
);
