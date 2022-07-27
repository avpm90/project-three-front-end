import { useState } from "react";
import { Link } from "react-router-dom";
import { ViewOrder } from "../../components/HomeAdmin/ViewOrder";
import { ViewTrip } from "../../components/HomeAdmin/ViewTrip";
import { ViewUser } from "../../components/HomeAdmin/ViewUser";
import "./style.css";
import { NavBar } from "../../components/HomePage/navBar";

export function HomeAdmin() {
  const [showTrips, setShowTrips] = useState(false);
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
      <button className={showTrips ? "test" : "btn"} onClick={handleTrip}>
        Trips
      </button>
      <button onClick={handleOrders}>Orders</button>
      <button onClick={handleUsers}>Users</button>
      {showTrips && <ViewTrip />}
      {showOrders && <ViewOrder />}
      {showUsers && <ViewUser />}
      <Link to="/">
        <button>Home</button>
      </Link>
    </>
  );
}
