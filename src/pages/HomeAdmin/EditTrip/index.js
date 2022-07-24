import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../api/api";
import { Form, Card, Divider } from "antd";

export function EditTrip() {
  const { id } = useParams();

  const [form, setForm] = useState({
    destination: "",
    category: "",
    inStock: "",
    description: "",
    unitPrice: "",
  });

  useEffect(() => {
    async function fetchId() {
      const response = await api.get(`/trip/one-trip/${id}`);
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
      await api.patch(`/trip/edit-trip/${id}`, form);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Card style={{ borderRadius: 50 }}>
        <Form>
          <label>Destination</label>
          <input
            name="destination"
            value={form.destination}
            onChange={handleForm}
          />
          <label>Category</label>
          <input name="category" value={form.category} onChange={handleForm} />
          <label>Description</label>
          <input
            name="description"
            value={form.description}
            onChange={handleForm}
          />
          <label>In Stock</label>
          <input name="inStock" value={form.inStock} onChange={handleForm} />
          <label>Price</label>
          <input
            name="unitPrice"
            value={form.unitPrice}
            onChange={handleForm}
          />
          <button onClick={handleUpdate}>Add Changes</button>
        </Form>
      </Card>
      <Divider></Divider>

      <Card style={{ borderRadius: 50, width: "500" }}>
        <p>Destination: {form.destination}</p>
        <p>Category: {form.category}</p>
        <p>Description: {form.description}</p>
        <p>In Stock: {form.inStock}</p>
        <p>Unit Price: {form.unitPrice}</p>
      </Card>
    </>
  );
}
