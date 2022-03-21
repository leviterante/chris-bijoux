import React from "react";

import {
  Navbar,
  Slider,
  Section,
  Highlights,
  Newsletter,
  Subscription,
  Footer,
} from "../../components";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Section />
      <Highlights />
      <Newsletter />
      <Subscription />
      <Footer />
    </div>
  );
};

export default Home;
