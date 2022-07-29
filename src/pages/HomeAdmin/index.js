import { useState } from "react";
import { ViewOrder } from "../../components/HomeAdmin/ViewOrder";
import { ViewTrip } from "../../components/HomeAdmin/ViewTrip";
import { ViewUser } from "../../components/HomeAdmin/ViewUser";
import "./style.css";
import { NavBar } from "../../components/HomePage/navBar";
import { Button } from "antd";
import { ContactUs } from "../../components/HomePage/contactUs";


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
          <Button type="primary" onClick={handleTrip}>
            Trips
          </Button>
          <Button type="primary" onClick={handleOrders}>
            Orders
          </Button>
          <Button type="primary" onClick={handleUsers}>
            Users
          </Button>
          <div>
            <CreateTrip />
          </div>
          {showTrips && <ViewTrip />}
          {showOrders && <ViewOrder />}
          {showUsers && <ViewUser />}
        </div>
      </div>
      <ContactUs />
    </>
  );
}
