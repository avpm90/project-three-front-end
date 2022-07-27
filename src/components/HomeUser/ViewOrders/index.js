import { useState, useEffect } from "react";
import { api } from "../../../api/api";
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
  console.log(orders);
  useEffect(() => {
    async function fetchOrders() {
      const response = await api.get("/order/all-orders-user");
      setOrders(response.data);
    }

    fetchOrders();
  }, []);

  return (
    <>
      <Card style={{ borderRadius: 50 }}>
        {orders.map((currentOrder) => {
          return (
            <Card>
              <div>
                <p>Order Id: {currentOrder.customerId}</p>
                <p>Total Price: ${currentOrder.orderTotal}</p>
              </div>
            </Card>
          );
        })}
      </Card>
    </>
  );
}
