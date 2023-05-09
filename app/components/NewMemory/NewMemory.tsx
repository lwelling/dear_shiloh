import React, { useState } from "react";
import { FloatButton, Form, Input, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";

export const NewMemory: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const { TextArea } = Input;

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  return (
    <>
      <FloatButton icon={<PlusOutlined />} onClick={showModal} />
      <Modal
        title="New Memory"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form
          labelCol={{ span: 0 }}
          wrapperCol={{ span: 24 }}
          layout="horizontal"
          style={{ maxWidth: 600 }}
        >
          <Form.Item>
            <TextArea rows={4} style={{ width: "100%" }} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
