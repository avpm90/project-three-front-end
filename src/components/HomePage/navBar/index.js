import style from "./style.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../../contexts/authContext";
import { Link } from "react-scroll";

import { LoginModal } from "../loginModal";
import { SignUpModal } from "../signupModal";

export function NavBar() {
  const { loggedInUser } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);
  const redirectAfterLogOut = useNavigate();
  const location = useLocation();
  console.log(location);
  console.log(window.location);

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
          <a href="/store">Store</a>
        </div>
        <div>
          <p>
            <SignUpModal />
          </p>
        </div>
      </div>
      <a href="/" className={style.navLogo}>
        Logo Here
      </a>
      <div className={style.navLeft}>
        <div>
          {location.pathname === "/" && (
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact Us
            </Link>
          )}
        </div>
        {loggedInUser ? (
          <button
            onClick={() => {
              logOut();
            }}
          >
            loginDiv Out
          </button>
        ) : (
          <div className={style.modalDiv}>
            <button
              className={style.loginP}
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Log In
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
