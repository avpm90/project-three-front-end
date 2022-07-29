import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../api/api";
import { Card, Button, Col, Row } from "antd";
import style from "../ViewTrip/style.module.css";

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

    <div className={style.divDVT}>

      <>
        <Row gutter={[48, 24]}>
          {trips.map((currentTrip) => {
            return (
              <div key={`${currentTrip._id}trips`}>
                <Col span={8}>
                  <Card
                    hoverable
                    style={{
                      width: 250,
                      height: 400,
                    }}
                    cover={
                      <img
                        style={{ height: 150 }}
                        src={currentTrip.tripImg}
                        alt={currentTrip.destination}
                      />
                    }
                  >
                    <Meta
                      title={currentTrip.destination}
                      description={currentTrip.description}
                      style={{ height: 180 }}
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
