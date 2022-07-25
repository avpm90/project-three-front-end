import style from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../../contexts/authContext";

import { LoginModal } from "../loginModal";

export function NavBar() {
  const { loggedInUser } = useContext(AuthContext);

  const [openModal, setOpenModal] = useState(false);

  const redirectAfterLogOut = useNavigate();

  // const [logOff, set] = useState(false);

  function logOut() {
    localStorage.removeItem("loggedInUser");
    console.log(localStorage);
    redirectAfterLogOut("/");
    window.location.reload();
  }

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
        {loggedInUser ? (
          <button
            onClick={() => {
              // console.log("clicou");
              logOut();
            }}
          >
            LOG OUT
          </button>
        ) : (
          <div className={style.modalDiv}>
            <button
              className={style.loginP}
              onClick={() => {
                setOpenModal(true);
              }}
            >
              LOG IN
            </button>
            <div className={style.loginDiv}>
              {openModal && <LoginModal closeModal={setOpenModal} />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
