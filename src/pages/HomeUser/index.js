import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/authContext";
import { NavBar } from "../../components/HomePage/navBar";
import { ViewOrders } from "../../components/HomeUser/ViewOrders";
import { EditUser } from "../../components/HomeUser/EditUser";
import { Card, Button } from "antd";
import { useNavigate } from "react-router-dom";

import "./style.css";
import { api } from "../../api/api";

export function HomeUser() {
  const navigate = useNavigate();
  const { loggedInUser } = useContext(AuthContext);
  console.log(loggedInUser);
  const [user, setUser] = useState({
    name: "",
    email: "",
    proImg: "",
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

  async function deleteTrip() {
    await api.delete(`/user/disable-user`);
    navigate("/");
  }

  return (
    <>
      <>
        <NavBar className="userNav" />
        <div className="userDivs">
          <Card className="userCard" style={{ borderRadius: 50 }}>
            <div className="userCardText">
              <h1>User Details</h1>
              <h2>Name</h2>
              <p>{user.name}</p>
              <h2>E-mail</h2>
              <p>{user.email}</p>
            </div>
            <div>
              <img className="picImg" src={user.proImg} alt={user.name} />

              {<EditUser update={update} setUpdate={setUpdate} />}
              <Button onClick={deleteTrip} type="primary">
                Disable
              </Button>
            </div>
          </Card>
        </div>
      </>

      <ViewOrders />
    </>
  );
}
