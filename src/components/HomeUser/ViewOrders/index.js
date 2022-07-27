import { useState, useEffect } from "react";
import { api } from "../../../api/api";
import style from "./style.module.css";

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
      <div>
        <h1>Orders</h1>
        <div>
          {orders.map((currentOrder) => {
            return (
              <div className={style.orderCard}>
                <p>Order Number: {currentOrder.customerId}</p>
                <p>Order Total: ${currentOrder.orderTotal}</p>
                <button>Details</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
