import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
// import Products from "./components/Products";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <ItemListContainer title="Nuestras plantas" />
      {/* <Products /> */}
    </>
  );
}

export default App;
