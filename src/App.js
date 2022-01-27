import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <ItemListContainer title="Nuestras plantas" />
    </>
  );
}

export default App;
