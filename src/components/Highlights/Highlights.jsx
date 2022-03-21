import React from "react";
import { Card, Row, Col } from "react-bootstrap";

import "./style.css";
import { images } from "../../constants";

const Highlights = () => {
  return (
    <div className="highlights">
      <div className="title">
        <h1>Découvrir les Bijoux</h1>
      </div>
      <Row xs={1} md={4} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col className="product">
            <Card className="card">
              <Card.Img
                variant="top"
                src={images.slide5}
                className="product-img"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Highlights;
