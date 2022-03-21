import React from "react";
import Button from "react-bootstrap/Button";

import "./style.css";

const Subscription = () => {
  return (
    <div className="subscription">
      <h1 className="subscription-title">ME TENIR INFORMÉ(E)</h1>
      <p className="subscription-desc">
        Je souhaite recevoir les dernières actualités
      </p>
      <Button variant="secondary" className="subscription-btn">
        S'abonner à la newsletter
      </Button>
    </div>
  );
};

export default Subscription;
