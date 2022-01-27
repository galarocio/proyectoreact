import "./NavBar.css";
import CardWidget from "./CardWidget";
let terceropcion = "Carrito";

function NavBar() {
  return (
    <>
      <nav>
        <ul className="nav justify-content-center">
          <CardWidget />
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
              Carrito
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
