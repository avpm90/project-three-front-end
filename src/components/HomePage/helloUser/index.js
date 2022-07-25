import style from "./style.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/authContext";

export function Hello() {
  const { loggedInUser } = useContext(AuthContext);
  // console.log(loggedInUser.user.name);

  return (
    <div className={style.helloComp}>
      <p>Hello, {loggedInUser.user.name}</p>
      <div className={style.helloText}>
        <h1>TEXT HERE!</h1>
        <h2>TEXT HERE!</h2>
      </div>
      <div>IMAGE HERE</div>
      <div className={style.helloBtns}>
        <Link to={"/store"}>SHOP NOW</Link>
        <Link to={"/quiz"}>TAKE THE QUIZ</Link>
      </div>
    </div>
  );
}
