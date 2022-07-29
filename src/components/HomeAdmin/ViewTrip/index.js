import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../api/api";
import { Card, Button, Col, Row } from "antd";

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

  return (
    <div className="divDVT">
      <>
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
