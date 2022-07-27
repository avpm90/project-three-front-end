import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/authContext";
import { NavBar } from "../../components/HomePage/navBar";
import { ViewOrders } from "../../components/HomeUser/ViewOrders";
import { EditUser } from "../../components/HomeUser/EditUser";
import { Card } from "antd";

import "./style.css";
import { api } from "../../api/api";

export function HomeUser() {
  const { loggedInUser } = useContext(AuthContext);
  console.log(loggedInUser);
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const [update, setUpdate] = useState(false);

  console.log(user);
  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await api.get("/user/profile");
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser();
  }, [update]);

  return (
    <>
      <>
        <NavBar className="userNav" />
        <div className="userDivs">
          <Card className="userCard">
            <h1>Details</h1>
            <h2>User</h2>
            <p>{user.name}</p>
            <h2>E-mail</h2>
            <p>{user.email}</p>

            <div>{<EditUser update={update} setUpdate={setUpdate} />}</div>
          </Card>
        </div>
      </>

      <ViewOrders />
    </>
  );
}
