import { useState } from "react";
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
        <p>TODAS AS TRIPS</p>
      )}
      {showOrders && ( // se esse state for TRUE mostra isso
        <p>TODOS OS ORDERS </p>
      )}
      {showUsers && ( // se esse state for TRUE mostra isso
        <p>TODOS OS USERS</p>
      )}
    </>
  );
}
