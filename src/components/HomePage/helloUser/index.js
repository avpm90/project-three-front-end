import style from "./style.module.css";
import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../../../contexts/authContext";


export function Hello() {
  // const { loggedInUser } = useContext(AuthContext);

  return (
    <div className={style.helloContainer}>
      {/* {loggedInUser ? <p>{`Hello, ${loggedInUser.user.name}`}</p> : null} */}
      <>
        <h1 className={style.helloH1}>Where do You Wanna Go?</h1>
        <h3 className={style.helloH3}>
          We have a selection of nice and surprising destinations to take you
        </h3>
      </>
      <div className={style.helloBtn}>
        <Link to={"/store"}>See All Trips</Link>
      </div>
    </div>
  );
}
