import { useState, useEffect } from "react";
import { api } from "../../../api/api";
import { Card } from "antd";

export function ViewOrder() {
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
      <Card style={{ borderRadius: 50 }}>
        {orders.map((currentOrder) => {
          return (
            <div>
              <Card style={{ borderRadius: 50 }} key={currentOrder._id}>
                <p>{currentOrder.customerId.name}</p>
                <p>{currentOrder.dateCreated}</p>
                <p>{currentOrder.orderTotal}</p>
              </Card>
              {currentOrder.trips.map((currentTrip) => {
                return (
                  <>
                    <Card style={{ borderRadius: 50 }} key={currentTrip._id}>
                      <p>{currentTrip.trip}</p>
                      <p>{currentTrip.quantity}</p>
                      <p>{currentTrip.unitPrice}</p>
                    </Card>
                  </>
                );
              })}
            </div>
          );
        })}
      </Card>
    </>
  );
}
