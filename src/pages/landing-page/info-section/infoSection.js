import "./infoSection.css";

import Warnings from "../../../data/warnings";

const InfoSection = () => {
  return (
    <section className="info-section">
      <div className="wrapper">
        <div className="container__info">
          <h2>What do the flood warnings mean?</h2>

          <ul className="container__cards">
            {Warnings.map((warning, index) => {
              return (
                <li className="card" key={index}>
                  <div className="card__head">
                    <div className="card__head-icon">{warning.icon}</div>
                    <div className="card__head-text">
                      <h3>{warning.title}</h3>
                      <p>{warning.desc}</p>
                    </div>
                  </div>
                  <ul className="card__body">
                    {warning.list.map((item, index) => {
                      return (
                        <li className="card__body-item" key={index}>
                          <p>{item}</p>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
