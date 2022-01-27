import header from "../images/header2.jpg";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <img src={header} alt="header" width="90px" className="header"></img>
    </div>
  );
};

export default Header;
