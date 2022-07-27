import { useState, useEffect } from "react";
import { api } from "../../../api/api";
import { Card } from "antd";
import { useNavigate } from "react-router-dom";

export function ViewOrder() {
  const navigate = useNavigate();

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
    }
    fetchOrders();
  }, []);

  async function deleteOrder(id) {
    await api.delete(`/order/delete-order/${id}`);
    navigate("/admin");
  }

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
                <button onClick={() => deleteOrder(currentOrder._id)}>
                  Delete
                </button>
              </div>
            </Card>
          );
        })}
      </Card>
    </>
  );
}
