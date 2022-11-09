import "./heroSection.css";
import Video from "../../../assets/videos/flood.mp4";

import Button from "../../../components/button/button";

const HeroSection = () => {
  const handleSeeMore = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <section className="hero-section">
      <video className="hero__section-video" loop muted autoPlay>
        <source src={Video} type="video/mp4" />
        Sorry, your browser doesn't support videos.
      </video>
      <div className="wrapper">
        <div className="container__hero">
          <h1>
            Flood warnings
            <br />
            <span>England</span>
          </h1>
          <Button text="see more" onClick={handleSeeMore} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
