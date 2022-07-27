import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/authContext";
import { NavBar } from "../../components/HomePage/navBar";
import { ViewOrders } from "../../components/HomeUser/ViewOrders";
import { EditUser } from "../../components/HomeUser/EditUser";
import { Card } from "antd";
import "./style.css";

export function HomeUser() {

  const { loggedInUser } = useContext(AuthContext);

  const [showEdition, setShowEdition] = useState(false);
  function handleEdition() {
    setShowEdition(!showEdition);
  }

  return (
    <>
      <>
        <NavBar className="userNav" />
        <div className="userDivs">
          <Card className="userCard">
            <h1>Details:</h1>
            <h2>User:</h2>
            <p>{loggedInUser.user.name}</p>
            <h2>E-mail:</h2>
            <p>{loggedInUser.user.email}</p>

            <button onClick={handleEdition}>Edit</button>
            {showEdition && <EditUser />}
          </Card>
        </div>
      </>

      <ViewOrders />
    </>
  );
}
