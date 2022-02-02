import "./ItemListContainer.css";
import ItemList from "./ItemList.js";

const ItemListContainer = ({ title }) => {
  return (
    <>
      <div className="listTitle">
        <h1>{title}</h1>
      </div>
      <ItemList />
    </>
  );
};

export default ItemListContainer;
