import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../../api/api";
import { Form, Card, Divider } from "antd";
export function EditOrder() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [order, setOrder] = useState([
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
    async function fetchId() {
      const response = await api.get(`/order/one-order/${id}`);
      setOrder(response.data);
    }
    fetchId();
  }, [id]);

  function handleForm(e) {
    setOrder({ ...order, [e.target.name]: e.target.value });
  }

  async function handleUpdate(e) {
    e.preventDefault();
    delete order._id;
    try {
      await api.patch(`/order/edit-order/${id}`, order);
    } catch (err) {
      console.log(err);
    }
  }
  async function deleteOrder() {
    await api.delete(`/order/delete-order/${id}`);
    navigate("/admin");
  }
  console.log(order);
  return (
    <>
      <Card style={{ borderRadius: 50 }}></Card>
      <Form>
        <label>Trip's Quantity</label>
        <input name="quantity" value={order.quantity} onChange={handleForm} />
      </Form>
      <Divider></Divider>
      <button onClick={handleUpdate}>Edit</button>
      <button onClick={deleteOrder}>Delete</button>
      {/* <Card style={{ borderRadius: 50, width: "500" }}>
        <p>Customer: {order.customerId.name}</p>
        <p>Order Date: {order.dateCreated}</p>
        <p>Order Id: {order.trips.trip}</p>
        <p>Trip's Quantity: {order.trips.quantity}</p>
        <p>Trip Price: ${order.trips.unitPrice}</p>
        <p>Total Price: ${order.orderTotal}</p>
      </Card> */}
    </>
  );
}
