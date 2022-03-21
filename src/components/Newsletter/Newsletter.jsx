import React from "react";
import { Card, Col, Row } from "react-bootstrap";

import "./style.css";
import { images } from "../../constants";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="newsletter-title">
        <h1 className="newsletter-title_text">DERNIÈRES ACTUALITÉS</h1>
      </div>
      <div className="news">
        <Row xs={1} md={3} className="g-4">
          {Array.from({ length: 3 }).map((_, idx) => (
            <Col>
              <Card className="text-center">
                <Card.Img variant="top" src={images.slide1} />
                <Card.Body className="card-body">
                  <Card.Title className="card-title">
                    Special title treatment
                  </Card.Title>
                  <Card.Text className="card-text">
                    Cupidatat esse in exercitation laboris minim velit ipsum ut
                    in. Magna qui fugiat sit voluptate dolor Lorem et ad
                    incididunt esse. Commodo elit velit anim exercitation anim
                    labore cillum sint. Pariatur et et sunt sunt ipsum eu sint
                    veniam ad occaecat incididunt. Occaecat incididunt
                    incididunt sit est anim non sit occaecat est aute eiusmod.
                    Ipsum magna commodo quis non sunt proident anim ad eiusmod
                    anim enim sit.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Newsletter;
