import "./heroSection.css";

import Button from "../../../components/button/button";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="wrapper">
        <div className="container__hero">
          <h1>
            Flood warnings
            <br />
            <span>England</span>
          </h1>
          <Button text="see more" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
