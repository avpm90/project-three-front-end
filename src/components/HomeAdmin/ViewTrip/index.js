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
    <div>
      <>
        <Row gutter={[48, 24]}>
          {trips.map((currentTrip) => {
            return (
              <div key={`${currentTrip._id}trips`} >
                <div className={style.divDVT}>
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
                        <Button>Edit</Button>
                      </Link>
                    </Card>
                  </Col>
                </div>
              </div>
            );
          })}
        </Row>
      </>
    </div>
  );
}
