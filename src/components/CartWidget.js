import cart from "../images/cart.svg";
import "./CartWidget.css";

const Cart = () => {
  return (
    <div>
      <a href="#">
        <img src={cart} alt="cart" className="cart"></img>
      </a>
    </div>
  );
};

export default Cart;
