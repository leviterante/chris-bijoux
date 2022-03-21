import React from "react";
import Button from "react-bootstrap/Button";

import "./style.css";

const Section = () => {
  return (
    <div className="section">
      <div className="btn-container">
        <Button href="#" className="btn btn-category" size="md" variant="link">
          coliers
        </Button>
        <Button href="#" className="btn btn-category" size="md" variant="link">
          bagues
        </Button>
        <Button href="#" className="btn btn-category" size="md" variant="link">
          bracelets
        </Button>
        <Button href="#" className="btn btn-category" size="md" variant="link">
          boucles d'oreilles
        </Button>
      </div>
    </div>
  );
};

export default Section;
