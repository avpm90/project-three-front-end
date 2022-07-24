import { useState } from "react";
import { Link } from "react-router-dom";
import { ViewOrder } from "../../components/HomeAdmin/ViewOrder";
import { ViewTrip } from "../../components/HomeAdmin/ViewTrip";
import { ViewUser } from "../../components/HomeAdmin/ViewUser";

export function HomeAdmin() {
  const [showTrips, setShowTrips] = useState(false);
  const [showOrders, setShowOrders] = useState(false);
  const [showUsers, setShowUsers] = useState(false);
  function handleTrip() {
    //deixa apenas o state showTrips como true e coloca todos os outros pra false
    setShowTrips(true);
    setShowOrders(false);
    setShowUsers(false);
  }
  function handleOrders() {
    //deixa apenas o state showOrders como true e coloca todos os outros pra false
    setShowTrips(false);
    setShowOrders(true);
    setShowUsers(false);
  }
  function handleUsers() {
    //deixa apenas o state showUsers como true e coloca todos os outros pra false
    setShowTrips(false);
    setShowOrders(false);
    setShowUsers(true);
  }

  return (
    <>
      <button onClick={handleTrip}>Trips</button>
      <button onClick={handleOrders}>Orders</button>
      <button onClick={handleUsers}>Users</button>
      {showTrips && ( // se esse state for TRUE mostra isso
        <ViewTrip />
      )}
      {showOrders && ( // se esse state for TRUE mostra isso
        <ViewOrder />
      )}
      {showUsers && ( // se esse state for TRUE mostra isso
        <ViewUser />
      )}

      <Link to="/">
        <button>Home</button>
      </Link>
    </>
  );
}
