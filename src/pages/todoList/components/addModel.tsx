import * as React from 'react';
import { Button, Modal } from 'antd';
const { memo, useState } = React;

interface IModelProps {
  /** 按钮文字 */
  btnText?: string;
  /** 标题 */
  title?: React.ReactNode | string;
  children?: React.ReactNode;
  /** 确定按钮 loading */
  loading?: boolean;
  /** 是否显示右上角的关闭按钮 */
  closable?: boolean;
  footer?: [React.ReactNode] | null;
  width?: string | number;
}

export default memo((props: IModelProps) => {
  const modalEL = React.useRef(null);
  const {
    btnText,
    children,
    title,
    loading = false,
    closable = false,
    footer,
    width = 520,
  } = props;
  const [visible, toggleVisible] = useState(false);
  const handleOk = () => {
    console.log(modalEL);
    toggleVisible(false);
  };
  const handleCancel = () => {
    toggleVisible(false);
  };
  const defaultFooter = [
    <Button key="back" onClick={handleCancel}>
      取消
    </Button>,
    <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
      确认
    </Button>,
  ];
  return (
    <div>
      <Button
        type="primary"
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
        onOk={handleOk}
        onCancel={handleCancel}
        ref={modalEL}
      >
        {React.Children.only(children)}
      </Modal>
    </div>
  );
});
