import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import { NavBar } from "../../components/HomePage/navBar";
import { ViewOrders } from "../../components/HomeUser/ViewOrders";
import { EditUser } from "../../components/HomeUser/EditUser";

export function HomeUser() {
  const navigate = useNavigate();

  const { loggedInUser } = useContext(AuthContext);

  function handleLogOut() {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  }

  const [showEdition, setShowEdition] = useState(false);
  function handleEdition() {
    setShowEdition(!showEdition);
  }

  return (
    <>
      <>
        <NavBar />
        <h1>{loggedInUser.user.name}</h1>
        <p>{loggedInUser.user.email}</p>
        <button onClick={handleLogOut}>Sair</button>
        <button onClick={handleEdition}>Users</button>
        {showEdition && <EditUser />}
      </>
      <ViewOrders />
    </>
  );
}
