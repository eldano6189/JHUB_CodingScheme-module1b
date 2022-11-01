import UnitedKingdom from "../../../assets/svg/unitedKingdom";
import Button from "../../../components/button/button";
import "./searchSection.css";

const SearchSection = () => {
  return (
    <section className="search-section">
      <div className="wrapper">
        <div className="container__search">
          <h2>Search flooding in your county</h2>

          <div className="container__countysearch">
            <div className="container__input">
              <input type="text" />
              <Button text="Search" />
              <p>
                All floods are different and you should take advice from the
                emergency services and your local authority if you’re in a
                flood.
              </p>
              <p>*Note only counties within England can be searched </p>
            </div>

            <div className="container__results">
              <h3 className="heading__medium">Staffordshire</h3>
              <div className="container__results-map">
                <UnitedKingdom />
              </div>
              <div className="container__results-warning"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
