import { useContext, useState, useEffect } from "react";
import { api } from "../../../api/api";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/authContext";
import { Card } from "antd";

export function ViewOrders() {
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
      const response = await api.get("/order/all-orders-user");
      setOrders(response.data);
    }

    fetchOrders();
  }, []);

  const { loggedInUser } = useContext(AuthContext);

  return (
    <>
      <Card style={{ borderRadius: 50 }}>
        {orders.map((currentOrder) => {
          return (
            <Card>
              <div>
                <p>Customer: {currentOrder.customerId.name}</p>
                <p>Order Date: {currentOrder.dateCreated}</p>
                {currentOrder.trips.map((currentTrip) => {
                  return (
                    <>
                      <p>Order Id: {currentTrip.trip}</p>
                      <p>Trip's Quantity: {currentTrip.quantity}</p>
                      <p>Trip Price: ${currentTrip.unitPrice}</p>
                      <p>Total Price: ${currentOrder.orderTotal}</p>
                    </>
                  );
                })}
              </div>
            </Card>
          );
        })}
      </Card>
    </>
  );
}
