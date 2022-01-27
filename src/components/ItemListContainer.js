import "./ItemListContainer.css";

const ItemListContainer = ({ title }) => {
  return (
    <div className="listContainer">
      <h1>{title}</h1>
    </div>
  );
};

export default ItemListContainer;
