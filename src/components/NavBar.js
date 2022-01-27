import "./NavBar.css";
import Cart from "./CartWidget";

function NavBar() {
  return (
    <>
      <header></header>
      <nav>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Catalogo
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              + info
            </a>
          </li>
        </ul>
        <div className="cartContainer">
          <Cart />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
