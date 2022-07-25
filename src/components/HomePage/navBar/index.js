import style from "./style.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";



import { LoginModal } from "../loginModal";


 
export function NavBar() {
  const [openModal, setOpenModal] = useState(false);
  // CONST GET ELEMENT BY ID
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
          <a href="DOCUMENT ELEMENT BY ID">CONTACT</a>
        </div>
        <div className={style.modalDiv}>
          <p
            onClick={() => {
              setOpenModal(true);
            }} className={style.loginP}
          >
            LOG IN
          </p>
          <div className={style.loginDiv}>
          {openModal && <LoginModal closeModal={setOpenModal} />}
          </div>
          
        </div>
      </div>
    </div>
  );
}
