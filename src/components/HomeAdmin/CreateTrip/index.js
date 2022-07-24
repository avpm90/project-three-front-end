import { useState } from "react";
//import { Link } from "react-router-dom";
import { api } from "../../../api/api";
import { Form } from "antd";

export function CreateTrip() {
  const [form, setForm] = useState({
    destination: "",
    category: "",
    inStock: "",
    description: "",
    unitPrice: "",
  });

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleTrips(e) {
    e.preventDefault();
    console.log(form);
    const response = await api.post("/trip/add-trip", form);
    console.log(response);
  }

  return (
    <div>
      <Form>
        <label>Destination</label>
        <input
          name="destination"
          placeholder="Destination"
          value={form.destination}
          onChange={handleForm}
        />
        <label>Category</label>
        <select
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleForm}
        >
          <option value="Adventure">Adventure</option>
          <option value="Relax">Relax</option>
          <option value="Night Life">Night Life</option>
          <option value="Culture">Culture</option>
          <option value="Beach">Beach</option>
        </select>

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
        <button onClick={handleTrips}>Add</button>
      </Form>
    </div>
  );
}
