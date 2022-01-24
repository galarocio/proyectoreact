import "./NavBar.css";
let terceropcion = "Carrito";

function NavBar() {
  return (
    <>
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
            Carrito
          </a>
        </li>
      </ul>
      {/* <nav className="nav">
        <ul>
          <li>Inicio</li>
          <li>Catalogo</li>
          <li>{terceropcion}</li>
        </ul>
      </nav> */}
    </>
  );
}

export default NavBar;
