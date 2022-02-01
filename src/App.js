import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import ItemListTitle from "./components/ItemListTitle";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <ItemListTitle title="Nuestras plantas" />
      <Products />
    </>
  );
}

export default App;
