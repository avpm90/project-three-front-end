import { useState } from "react";
//import { Link } from "react-router-dom";
import { api } from "../../../api/api";
import { Form } from "antd";

export function CreateTrip() {
  const [form, setForm] = useState({
    destination: "",
    category: "Adventure",
    inStock: "",
    description: "",
    unitPrice: "",
  });

  const [img, setImg] = useState("");

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

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

  async function handleTrips(e) {
    e.preventDefault();

    try {
      const imgURL = await handleUpload();
      const response = await api.post("/trip/add-trip", {
        ...form,
        tripImg: imgURL,
      });
      console.log(response);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Form onSubmit={handleTrips}>
        <label>Destination</label>
        <input
          name="destination"
          placeholder="Destination"
          value={form.destination}
          onChange={handleForm}
        />
        <label htmlFor="formImg">Trip Pic Here</label>
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
          <option value="Nightlife">Nightlife</option>
          <option value="Culture">Culture</option>
          <option value="Romance">Romance</option>
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
