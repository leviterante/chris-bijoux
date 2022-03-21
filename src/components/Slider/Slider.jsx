import React from "react";
import Carousel from "react-bootstrap/Carousel";

import "./style.css";
import { images } from "../../constants";

const Slider = () => {
  return (
    <div className="slider">
      <div className="carousel">
        <Carousel fade>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={images.slide4}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Tous Unique</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={images.slide5}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Bijoux Fantasie</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src={images.slide2}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Non Raffinée</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
