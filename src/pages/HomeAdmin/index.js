import { useState } from "react";
import { Link } from "react-router-dom";
import { EditOrder } from "../../components/HomeAdmin/EditOrder";
import { EditTrip } from "../../components/HomeAdmin/EditTrip";
import { EditUser } from "../../components/HomeAdmin/EditUser";

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
        <EditTrip />
      )}
      {showOrders && ( // se esse state for TRUE mostra isso
        <EditOrder />
      )}
      {showUsers && ( // se esse state for TRUE mostra isso
        <EditUser />
      )}

      <Link to="/">
        <button>Home</button>
      </Link>
    </>
  );
}
