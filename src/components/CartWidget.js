import cart from "../images/cart.webp";
import "./CartWidget.css";

const Cart = () => {
  return (
    <div>
      <a href="#">
        <img src={cart} alt="cart" width="90px" className="cart"></img>
      </a>
    </div>
  );
};

export default Cart;
