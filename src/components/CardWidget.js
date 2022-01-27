import logo from "../images/logo.jpg";
import "./CardWidget.css";

const CardWidget = () => {
  return (
    <div>
      <img src={logo} alt="logo" width="90px" className="logo"></img>
    </div>
  );
};

export default CardWidget;
