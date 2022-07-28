import { useState, useEffect } from "react";
import { api } from "../../../api/api";
import style from "./style.module.css";
import { Button } from "antd";

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

  return (
    <div className={style.pagedivO}>
      <h1>Orders</h1>

      <div className={style.ordersContainer}>
        {orders.map((currentOrder) => {
          return (
            <div className={style.orderCard}>
              <p>Order Number: {currentOrder.customerId}</p>
              <p>Order Total: ${currentOrder.orderTotal}</p>
              <Button type="primary">Details</Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
