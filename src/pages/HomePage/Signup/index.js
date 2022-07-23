import { useState } from "react";
import { api } from "../../../api/api";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "", // MUDAR NO BACK-END PARA DUAS LETRAR. FALAR COM TATHY!
    // surname: "", EXCLUIR DO BACK-END!!!
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
    birthday: "", // COLOCAR NO BACK! TYPE STRING, REQUIRED!
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
      await api.post("/user/sign-up", form);

      navigate("/log-in");
    } catch (error) {
      console.log(error);
    }
  }

  return (
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
        {/* <label htmlFor="formSurname">Surname:</label>
      <input
        id="formSurname"
        name="surname"
        type="text"
        value={form.surname}
        onChange={handleChange}
      /> */}
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
      <button type="submit" onClick={handleSubmit}>
        Sign up!
      </button>
    </div>
  );
}
