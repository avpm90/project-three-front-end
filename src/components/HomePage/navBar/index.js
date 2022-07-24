import style from "./style.module.css";
import { Link } from "react-router-dom";

export function NavBar() {
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
          <Link to={""}>CONTACT</Link>
        </div>
        <div>
          <Link to={"/log-in"}>LOG IN</Link>
        </div>
      </div>
    </div>
  );
}
