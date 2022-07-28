import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../api/api";
import { Card, Button, Col, Row } from "antd";
import { CreateTrip } from "../CreateTrip";

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
  const { Meta } = Card;

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
    <div className="divDVT">
      <>
        <Button type="primary" className="btnAT" onClick={handleCreate}>
          Create Trip
        </Button>
        {showCreate && <CreateTrip />}
        <Row gutter={[48, 24]}>
          {trips.map((currentTrip) => {
            return (
              <div key={`${currentTrip._id}trips`}>
                <Col span={8}>
                  <Card
                    hoverable
                    style={{
                      width: 240,
                    }}
                    cover={
                      <img
                        src={currentTrip.tripImg}
                        alt={currentTrip.destination}
                      />
                    }
                  >
                    <Meta
                      title={currentTrip.destination}
                      description={currentTrip.description}
                    />
                    {/*  <p>Destination: </p>
                <p>Category: {currentTrip.category}</p>
                <p>Description: </p>
                <p>In Stock: {currentTrip.inStock}</p>
                <p>Unit Price: {currentTrip.unitPrice}</p> */}

                    <Link to={`/admin/trip/${currentTrip._id}`}>
                      <Button type="primary">Edit</Button>
                    </Link>
                  </Card>
                </Col>
              </div>
            );
          })}
        </Row>
      </>
    </div>
  );
}
