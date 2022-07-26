// import { Modal } from "antd";
import React, { useState } from "react";
// import { api } from "../../../api/api";
// import { useNavigate } from "react-router-dom";
import { Modal, DatePicker, Form, Input, Checkbox } from "antd";

export const SignUpModal = () => {
  // MODAL
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  console.log(modalText);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };

  // SIGN UP FORM
  //   const navigate = useNavigate();
  //   const [form, setForm] = useState({
  //     name: "",
  //     email: "",
  //     confirmEmail: "",
  //     password: "",
  //     confirmPassword: "",
  //     birthday: "",
  //   });

  //   function handleChange(e) {
  //     setForm({ ...form, [e.target.name]: e.target.value });
  //   }

  //   async function handleSubmit(e) {
  //     e.preventDefault();
  //     try {
  //       // const imgURL = await handleUpload();
  //       if (
  //         form.email !== form.confirmEmail ||
  //         form.password !== form.confirmPassword
  //       ) {
  //         // const showModal = () => {
  //         //     setIsModalVisible(true);
  //         //   };
  //         return;
  //         // console.log("nao deu match!")
  //       }
  //       await api.post("/user/sign-up", form);
  //       navigate("/");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  // SIGN UP ANTD
  const [componentSize, setComponentSize] = useState("default");

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <>
      <p type="primary" onClick={showModal}>
        Sign Up
      </p>
      <Modal
        title="Sign Up"
        visible={visible}
        onOk={handleOk}
        // onOk={handleSubmit}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        // closable={false}
        okText="Submit"
      >
        <p>
          <Form
            labelCol={{
              span: 10,
            }}
            wrapperCol={{
              span: 14,
            }}
            layout="vertical"
            initialValues={{
              size: componentSize,
            }}
            onValuesChange={onFormLayoutChange}
            size={componentSize}
          >
            <Form.Item label="What should we call you?">
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item label="What's your date of birth?">
              <DatePicker />
            </Form.Item>
            <Checkbox>Sign up for our newsletter</Checkbox>
          </Form>
        </p>
      </Modal>
    </>
  );
};
