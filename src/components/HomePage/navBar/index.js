import style from "./style.module.css";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../../contexts/authContext";

import { LoginModal } from "../loginModal";

export function NavBar() {
  const { loggedInUser } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);


  return (
    <div className={style.navComp}>
      <div className={style.navRight}>
        <div>
          <Link to={"/store"}>STORE</Link>
        </div>
        <div>
          <Link to={"/sign-up"}>SIGN UP</Link>
        </div>
      </div>
      <Link to={"/"} className={style.navLogo}>
        LOGO HERE
      </Link>
      <div className={style.navLeft}>
        <div>
          <p href="DOCUMENT ELEMENT BY ID">CONTACT</p>
        </div>
        <div className={style.modalDiv}>
          <p
            onClick={() => {
              setOpenModal(true);
            }}
            className={style.loginP}
          >
            {loggedInUser ? <p>LOG OFF</p> : <p>LOG IN</p>}
          </p>
          <div className={style.loginDiv}>
            {openModal && <LoginModal closeModal={setOpenModal} />}
          </div>
        </div>
      </div>
    </div>
  );
}
