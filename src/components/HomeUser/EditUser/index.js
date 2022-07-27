import React, { useState, useContext } from "react";
import { Button, Form, Input, Modal } from "antd";
import { AuthContext } from "../../../contexts/authContext";
import { api } from "../../../api/api";

export function EditUser() {
  const { loggedInUser } = useContext(AuthContext);
  const [forms, setForms] = useState({
    name: "",
    email: "",
    birthday: "",
  });
  function handleForms(e) {
    setForms({ ...forms, [e.target.name]: e.target.value });
  }

  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = async (e) => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);

    e.preventDefault();
    delete forms._id;
    try {
      await api.patch(`/user/update-user`, forms);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Edit User
      </Button>
      <Modal
        title="EDIT DETAILS"
        visible={visible}
        onOk={handleOk}
        closable={false}
        okText={"Save Changes"}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <div>
          {
            <Form
              {...formItemLayout}
              layout={formLayout}
              form={form}
              initialValues={{
                layout: formLayout,
              }}
              onValuesChange={onFormLayoutChange}
            >
              <Form.Item label="User">
                <Input
                  type="text"
                  name="name"
                  value={forms.name}
                  onChange={handleForms}
                  placeholder="type your name"
                />
              </Form.Item>
            </Form>
          }
        </div>
      </Modal>
    </>
  );
}
