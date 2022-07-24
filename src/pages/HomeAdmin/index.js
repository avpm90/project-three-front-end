import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../../api/api";
import { Card } from "antd";

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
  const [users, setUsers] = useState([
    {
      name: "",
      surname: "",
    },
  ]);
  console.log(users);

  useEffect(() => {
    async function fetchUsers() {
      const response = await api.get("/user/all-users");
      setUsers(response.data);
    }
    fetchUsers();
  }, []);

  const [trips, setTrips] = useState([
    {
      destination: "",
      category: "",
    },
  ]);
  console.log(trips);

  useEffect(() => {
    async function fetchTrips() {
      const response = await api.get("/trip/all-trips");
      setTrips(response.data);
    }
    fetchTrips();
  }, []);

  const [orders, setOrders] = useState([
    {
      customerId: "",
      dateCreated: "",
      orderTotal: "",
      trips: [
        {
          trip: "",
          quantity: "",
          unitPrice: "",
        },
      ],
    },
  ]);

  useEffect(() => {
    async function fetchOrders() {
      const response = await api.get("/order/all-orders");
      setOrders(response.data);
      console.log(response.data);
    }
    fetchOrders();
  }, []);

  return (
    <>
      <button onClick={handleTrip}>Trips</button>
      <button onClick={handleOrders}>Orders</button>
      <button onClick={handleUsers}>Users</button>
      {showTrips && ( // se esse state for TRUE mostra isso
        <Card style={{ borderRadius: 50 }}>
          {trips.map((currentTrip) => {
            return (
              <div key={currentTrip.customerId}>
                <p>{currentTrip.destination}</p>
                <p>{currentTrip.category}</p>

                <button>View</button>
                <button>Delete</button>
              </div>
            );
          })}
        </Card>
      )}
      {showOrders && ( // se esse state for TRUE mostra isso
        <Card>
          {orders.map((currentOrder) => {
            return (
              <div>
                <Card key={currentOrder.customerId}>
                  <p>{currentOrder.customerId.name}</p>
                  <p>{currentOrder.dateCreated}</p>
                  <p>{currentOrder.orderTotal}</p>
                </Card>
                {currentOrder.trips.map((currentTrip) => {
                  return (
                    <>
                      <p>{currentTrip.trip}</p>
                      <p>{currentTrip.quantity}</p>
                      <p>{currentTrip.unitPrice}</p>
                    </>
                  );
                })}
              </div>
            );
          })}
        </Card>
      )}
      {showUsers && ( // se esse state for TRUE mostra isso
        <div>
          <Card style={{ borderRadius: 50 }}>
            {users.map((currentUser) => {
              return (
                <div key={currentUser.customerId}>
                  <p>
                    {currentUser.name} {currentUser.surname}
                  </p>
                  <p>{currentUser.email}</p>
                  <button>View</button>
                  <button>Delete</button>
                </div>
              );
            })}
          </Card>

          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
      )}
    </>
  );
}
