import { useState, React } from "react";
import { api } from "../../../api/api";
import { useNavigate } from "react-router-dom";
// import style from "./style.module.css";

import { Alert } from "antd";

export function SignUpForm() {

//   const [isModalVisible, setIsModalVisible] = useState(false);


//   const handleOk = () => {
//     setIsModalVisible(false);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };

  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
    birthday: "",
  });

  // const [img, setImg] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  /*   function handleImage(e) {
    setImg(e.target.files[0]);
  }
 */
  /*   async function handleUpload() {
    try {
      const uploadData = new FormData();
      uploadData.append("picture", img);

      const response = await api.post("/upload-image", uploadData);

      return response.data.url;
    } catch (error) {
      console.log(error);
    }
  }
 */
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      // const imgURL = await handleUpload();
      if (
        form.email !== form.confirmEmail ||
        form.password !== form.confirmPassword
      ) {
        // const showModal = () => {
        //     setIsModalVisible(true);
        //   };
        return;
        // console.log("nao deu match!")
      }
      await api.post("/user/sign-up", form);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {/* <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      > */}
        <Alert
          message="ERROR!"
          description="Email or Password didn't match. Please, check and submit again!"
          type="error"
          showIcon
          closable
        />
      {/* </Modal> */}
      {/* <Alert message="Error" type="error" showIcon /> */}
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="formName">What should we call you?</label>
          <input
            id="formName"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
          />
          {/* <label htmlFor="formImg">Sua foto de perfil:</label>
      <input type="file" id="formImg" onChange={handleImage} />
 */}
          <label htmlFor="formEmail">What is your email?</label>
          <input
            id="formEmail"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />
          <label htmlFor="formConfirmEmail">Confirm your email</label>
          <input
            id="formConfirmEmail"
            name="confirmEmail"
            type="email"
            value={form.confirmEmail}
            onChange={handleChange}
          />
          <label htmlFor="formPassword">Create a password</label>
          <input
            id="formPassword"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
          />
          <label htmlFor="formConfirmPassword">Confirm password</label>
          <input
            id="formConfirmPassword"
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
          />
          {/* <button type="submit">Cadastrar</button> NAO PRECISA! */}
          <label htmlFor="formBirthday">What's your date of birth?</label>
          <input
            id="formBirthday"
            type="date"
            name="birthday"
            value={form.birthday}
            onChange={handleChange}
          />
          {/* CHECKBOX SEM FUNCIONALIDADE! */}
          <input
            id="newsletter"
            type="checkbox"
            // name="" PRECISA??
            // value={form.} PRECISA??
            // onChange={handleChange} PRECISA??
          />
          <label htmlFor="newsletter">Sign up for our newsletter</label>
        </form>
        <button type="submit " onClick={handleSubmit}>
          Sign up!
        </button>
      </div>
    </>
  );
}
