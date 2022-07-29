import { useState } from "react";
import { ViewOrder } from "../../components/HomeAdmin/ViewOrder";
import { ViewTrip } from "../../components/HomeAdmin/ViewTrip";
import { ViewUser } from "../../components/HomeAdmin/ViewUser";
import "./style.css";
import { NavBar } from "../../components/HomePage/navBar";
import { Button } from "antd";
import { ContactUs } from "../../components/HomePage/contactUs";
import { CreateTrip } from "../../components/HomeAdmin/CreateTrip";


export function HomeAdmin() {
  const [showTrips, setShowTrips] = useState(true);
  const [showOrders, setShowOrders] = useState(false);
  const [showUsers, setShowUsers] = useState(false);
  function handleTrip() {
    setShowTrips(true);
    setShowOrders(false);
    setShowUsers(false);
  }
  function handleOrders() {
    setShowTrips(false);
    setShowOrders(true);
    setShowUsers(false);
  }
  function handleUsers() {
    setShowTrips(false);
    setShowOrders(false);
    setShowUsers(true);
  }

  return (
    <>
      <NavBar />
      <div className="adminDivs">
        <div>
          <Button onClick={handleTrip}>
            Trips
          </Button>
          <Button onClick={handleOrders}>
            Orders
          </Button>
          <Button onClick={handleUsers}>
            Users
          </Button>
          <div></div>
          {showTrips && <CreateTrip />}
          {showTrips && <ViewTrip />}

          {showOrders && <ViewOrder />}
          {showUsers && <ViewUser />}
        </div>
      </div>
      <ContactUs />
    </>
  );
}
