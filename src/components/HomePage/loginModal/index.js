import style from "./style.module.css";

// import React from "react";

export function LoginModal({ closeModal }) {
  return (
    <div className={style.modalBackground}>
      <div className={style.modalDiv}>
        <form>
          <div>
            <button onClick={() => closeModal(false)}>X</button>
          </div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            // value={form.email}
            // onChange={handleChange}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            // value={form.password}
            // onChange={handleChange}
          />
          <button type="submit">Log In</button>
          <button onClick={() => closeModal(false)}>Cancel</button>
        </form>
      </div>
    </div>
  );
}
