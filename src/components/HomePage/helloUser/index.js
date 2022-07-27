import style from "./style.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/authContext";

export function Hello() {
  const { loggedInUser } = useContext(AuthContext);

  return (
    <div className={style.helloComp}>
      {/* {loggedInUser ? <p>{`Hello, ${loggedInUser.user.name}`}</p> : null} */}
      <div className={style.helloText}>
        <h1>Where do you wanna go?</h1>
        <h2>We have a selection of nice and surprising destinations to take you</h2>
      </div>
      {/* <div>IMAGE HERE</div> */}
      {/* <div className={style.helloBtns}> */}
        <Link to={"/store"}>See All Trips</Link>
        {/* <Link to={"/quiz"}>TAKE THE QUIZ</Link> */}
      {/* </div> */}
    </div>
  );
}
