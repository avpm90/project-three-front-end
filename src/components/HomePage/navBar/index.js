import style from "./style.module.css";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/authContext";
import { Link } from "react-scroll";

import { SignUpModal } from "../signupModal";
import { LoginModal } from "../loginModal";

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
        <div className={style.text}>
          <NavLink to="/store" className={style.text}>
            Store
          </NavLink>
        </div>
        <div>{loggedInUser ? null : <SignUpModal />}</div>
      </div>
      <NavLink to="/" className={style.text}>
        Logo Here
      </NavLink>
      <div className={style.navLeft}>
        <div>
          {location.pathname === "/" && (
            <Link
              className={style.text}
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
        <div>
          {loggedInUser ? (
            <p
              onClick={() => {
                logOut();
              }}
            >
              Log Off
            </p>
          ) : (
            <LoginModal />
          )}
        </div>
      </div>
    </div>
  );
}
