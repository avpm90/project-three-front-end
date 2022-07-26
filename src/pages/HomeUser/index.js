import { useContext } from "react";
//import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import { NavBar } from "../../components/HomePage/navBar";
import { ViewOrders } from "../../components/HomeUser/ViewOrders";

export function HomeUser() {
  const navigate = useNavigate();

  const { loggedInUser } = useContext(AuthContext);

  function handleLogOut() {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  }

  return (
    <>
      <>
        <NavBar />
        <h1>{loggedInUser.user.name}</h1>
        <p>{loggedInUser.user.email}</p>
        <button onClick={handleLogOut}>Sair</button>
      </>
      <ViewOrders />
    </>
  );
}
