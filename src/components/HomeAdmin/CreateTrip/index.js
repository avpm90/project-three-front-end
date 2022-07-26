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
    window.location.reload();
  }

  const [img, setImg] = useState("");

  function handleImage(e) {
    setImg(e.target.files[0]);
  }

  async function handleUpload() {
    try {
      const uploadData = new FormData();
      uploadData.append("picture", img);

      const response = await api.post("/upload-image", uploadData);

      return response.data.url;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Form onSubmit={handleUpload}>
        <label>Destination</label>
        <input
          name="destination"
          placeholder="Destination"
          value={form.destination}
          onChange={handleForm}
        />
        <label htmlFor="formImg">Sua foto de perfil:</label>
        <input type="file" id="formImg" onChange={handleImage} />
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
        <button type="submit" onClick={handleTrips}>
          Add
        </button>
      </Form>
    </div>
  );
}
