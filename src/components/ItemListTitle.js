import "./ItemListTitle.css";

const ItemListTitle = ({ title }) => {
  return (
    <>
      <div className="listTitle">
        <h1>{title}</h1>
      </div>
    </>
  );
};

export default ItemListTitle;
