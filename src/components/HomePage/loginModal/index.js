import style from "./style.module.css";
import { useState, useContext } from "react";
import { AuthContext } from "../../../contexts/authContext";
import { api } from "../../../api/api";
import { useNavigate } from "react-router-dom";

// import React from "react";

export function LoginModal({ closeModal }) {

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { setLoggedInUser } = useContext(AuthContext);



  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSumit(e) {
    e.preventDefault();

    try {
      const response = await api.post("/user/log-in", form);
      setLoggedInUser({ ...response.data });
      console.log(response.data);

      localStorage.setItem("loggedInUser", JSON.stringify(response.data));
      if (response.data.user.role === "ADMIN") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const [isToggled, setisToggled] = useState(false);

  return (
    <div className={style.modalBackground}>
      <div className={style.modalDiv}>
        <form onSubmit={handleSumit}>
          <div>
            <button onClick={() => closeModal(false)}>X</button>
          </div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          <button type="submit" onClick= {() => setisToggled(!isToggled)}>Log In</button>
          <button onClick={() => closeModal(false)}>Cancel</button>
        </form>
      </div>
    </div>
  );
}
