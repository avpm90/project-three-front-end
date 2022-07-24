import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../api/api";
import { Form, Card, Divider } from "antd";

export function ViewTrip() {
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
      await api.put(`/trip/one-trip/${id}`, form);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Card style={{ borderRadius: 50, width:"500" }}>
        <p>{form.destination}</p>
        <p>{form.category}</p>
        <p>{form.description}</p>
        <p>{form.inStock}</p>
        <p>{form.unitPrice}</p>
      </Card>
      <Divider></Divider>
      <Card style={{ borderRadius: 50 }}>
        <Form>
          <label>Destination</label>
          <input
            name="destination"
            placeholder="Destination"
            value={form.destination}
            onChange={handleForm}
          />
          <label>Category</label>
          <input
            name="category"
            placeholder="Category"
            value={form.category}
            onChange={handleForm}
          />
          <label>Description</label>
          <input
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleForm}
          />
          <label>In Stock</label>
          <input
            name="inStock"
            placeholder="In Stock"
            value={form.inStock}
            onChange={handleForm}
          />
          <label>Price</label>
          <input
            name="unitPrice"
            placeholder="Price"
            value={form.unitPrice}
            onChange={handleForm}
          />
          <button onClick={handleUpdate}>Edit</button>
        </Form>
      </Card>
    </>
  );
}
