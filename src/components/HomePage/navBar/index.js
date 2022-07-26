import style from "./style.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/authContext";
import { Link } from "react-scroll";

import { SignUpModal } from "../signupModal";
import { LoginModal } from "../../loginModal";

export function NavBar() {
  const { loggedInUser } = useContext(AuthContext);
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
          <p
            onClick={() => {
              logOut();
            }}
          >
            Log Off
          </p>
        ) : (
          <div className={style.modalDiv}>
            <LoginModal />
          </div>
        )}
      </div>
    </div>
  );
}
