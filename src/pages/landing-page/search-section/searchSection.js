import { useRef, useState, useEffect } from "react";
import UnitedKingdom from "../../../assets/svg/unitedKingdom";
import WarningIcon from "../../../assets/svg/warningIcon";
import Button from "../../../components/button/button";
import "./searchSection.css";

const SearchSection = () => {
  const searchRef = useRef();
  const [data, setData] = useState([]);

  useEffect(() => {
    searchRef.current.addEventListener("keypress", (event) => {
      event.key === "Enter" && searchCounty();
    });
  }, []);

  const searchCounty = () => {
    const url = `https://environment.data.gov.uk/flood-monitoring/id/floods?county=${searchRef.current.value}`;
    searchRef.current.value !== "" &&
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
  };

  return (
    <section className="search-section">
      <div className="wrapper">
        <div className="container__search">
          <h2>Search flooding in your county</h2>

          <div className="container__countysearch">
            <div className="container__input">
              <input
                type="text"
                placeholder="e.g. Staffordshire"
                ref={searchRef}
              />
              <Button text="Search" onClick={searchCounty} />
              <p>
                All floods are different and you should take advice from the
                emergency services and your local authority if you’re in a
                flood.
              </p>
              <p>*Note only counties within England can be searched </p>
            </div>

            {data.length !== 0 && (
              <div className="container__results">
                <h3>Results for: {searchRef.current.value}</h3>
                {data.items.length === 0 && <h3>No data for this area</h3>}

                <div className="container__results-map">
                  <UnitedKingdom search={searchRef.current.value} />
                </div>

                <ul className="container__results-warning">
                  {data.items
                    .sort((a, b) => a.severityLevel - b.severityLevel)
                    .map((warn, index) => {
                      return (
                        <li key={index} className="warning">
                          <div className="warning__icon">
                            {warn.severityLevel === 1 ? (
                              <WarningIcon SFW />
                            ) : warn.severityLevel === 2 ? (
                              <WarningIcon FW />
                            ) : (
                              <WarningIcon />
                            )}
                          </div>
                          <div className="warning__text">
                            <div className="warning__text-location">
                              <h2>{warn.description}</h2>
                            </div>
                            <div className="warning__text-time">
                              <p>Updated at {warn.timeSeverityChanged}</p>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
