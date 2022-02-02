import Card from "react-bootstrap/Card";
import "./Item.css";
import Counter from "./ItemCount.js";

const Item = ({ data }) => {
  return (
    <div className="itemMargin">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title className="cardTitle">{data.name}</Card.Title>
          <div>
            <Counter stock={3} />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
