import "./header.css";

import LogoIcon from "../../assets/svg/logoIcon";

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="container__header">
          <p>FW</p>
          <LogoIcon />
          <p>EN</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
