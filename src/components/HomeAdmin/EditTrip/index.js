import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../api/api";
import { Card } from "antd";
import { CreateTrip } from "../CreateTrip";

export function EditTrip() {
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

  const [showCreate, setShowCreate] = useState(false);
  function handleCreate() {
    setShowCreate(!showCreate);
  }

  /*  async function deleteTrip() {
    await api.delete(`/trip/delete-trip/${id}`);
  } */

  return (
    <div>
      <>
        <button onClick={handleCreate}>Create Trip</button>
        {showCreate && <CreateTrip />}
        {trips.map((currentTrip) => {
          return (
            <Card style={{ borderRadius: 50 }}>
              <div key={currentTrip.trip}>
                <p>{currentTrip.destination}</p>
                <p>{currentTrip.category}</p>
                <p>{currentTrip.description}</p>
                <p>{currentTrip.inStock}</p>
                <p>{currentTrip.unitPrice}</p>

                <Link to={`/admin/${currentTrip._id}`}>
                  <button>View</button>
                </Link>
              </div>
            </Card>
          );
        })}
      </>
    </div>
  );
}
