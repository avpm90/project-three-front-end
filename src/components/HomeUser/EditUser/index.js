import { useContext, useState } from "react";
import { api } from "../../../api/api";

import { AuthContext } from "../../../contexts/authContext";
import { Form } from "antd";

export function EditUser() {
  const { loggedInUser } = useContext(AuthContext);
  const [form, setForm] = useState({
    name: "",
    email: "",
    birthday: "",
  });

  console.log(loggedInUser);

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleUpdate(e) {
    e.preventDefault();
    delete form._id;
    try {
      await api.patch(`/user/update-user`, form);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Form>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleForm}
        />

        <label>Birthday</label>
        <input
          type="date"
          name="birthday"
          value={form.birthday}
          onChange={handleForm}
        />
        <button onClick={handleUpdate}>Done</button>
      </Form>
    </>
  );
}
