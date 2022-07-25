import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../api/api";
import { Form, Card, Divider } from "antd";

export function EditUser() {
  const { id } = useParams();

  const [form, setForm] = useState({
    name: "",
    email: "",
    birthday: "",
  });

  useEffect(() => {
    async function fetchId() {
      const response = await api.get(`/user/profile/${id}`);
      setForm(response.data);
    }
    fetchId();
  }, [id]);

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleUpdate(e) {
    e.preventDefault();
    delete form._id;
    try {
      await api.patch(`/user/update-user/${id}`, form);
    } catch (err) {
      console.log(err);
    }
  }
  /*   async function deleteTrip() {
    await api.delete(`/user/disable-user${id}`);
  }
 */
  // <button onClick={deleteTrip}>Delete</button>
  return (
    <>
      <Card style={{ borderRadius: 50 }}>
        <Form>
          <label>Name:</label>
          <input name="name" value={form.name} onChange={handleForm} />
          <label>E-mail:</label>
          <input name="email" value={form.email} onChange={handleForm} />
          <label>Birthday:</label>
          <input
            name="birthday"
            type="date"
            value={form.birthday}
            onChange={handleForm}
          />

          <button onClick={handleUpdate}>Add Changes</button>
        </Form>
      </Card>
      <Divider></Divider>

      <Card style={{ borderRadius: 50, width: "500" }}>
        <p>Name: {form.name}</p>
        <p>E-mail: {form.email}</p>
        <p>Birthday: {form.birthday}</p>
      </Card>
    </>
  );
}
