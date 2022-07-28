import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../api/api";
import { Card, Button } from "antd";
import { CreateTrip } from "../CreateTrip";
import "./style.css";

export function ViewTrip() {
  const [trips, setTrips] = useState([
    {
      destination: "",
      category: "",
      description: "",
      inStock: "",
      unitPrice: "",
      tripImg: "",
    },
  ]);

  useEffect(() => {
    async function fetchTrips() {
      const response = await api.get("/trip/all-trips");
      setTrips(response.data);
    }
    fetchTrips();
  }, []);

  const [showCreate, setShowCreate] = useState(false);
  function handleCreate() {
    setShowCreate(!showCreate);
  }

  return (
    <div>
      <>
        <Button type="primary" className="btnAT" onClick={handleCreate}>
          Create Trip
        </Button>
        {showCreate && <CreateTrip />}
        {trips.map((currentTrip) => {
          return (
            <Card style={{ borderRadius: 50, width: "325px"}}>
              <div key={currentTrip._id}>
                <img
                  className="picImgT"
                  src={currentTrip.tripImg}
                  alt={currentTrip.destination}
                />
                <Card style={{ width: "275px" }}>
                  <p>Destination: {currentTrip.destination}</p>
                  <p>Category: {currentTrip.category}</p>
                  <p style={{ width: 250 }}>
                    Description: {currentTrip.description}
                  </p>
                  <p>In Stock: {currentTrip.inStock}</p>
                  <p>Unit Price: {currentTrip.unitPrice}</p>

                  <Link to={`/admin/trip/${currentTrip._id}`}>
                    <Button type="primary">Edit</Button>
                  </Link>
                </Card>
              </div>
            </Card>
          );
        })}
      </>
    </div>
  );
}
