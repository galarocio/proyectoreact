import React, { useState, useEffect } from "react";
import Item from "./Item.js";

const ItemList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <div className="items">
      {users.map((user) => {
        return (
          <div key={user.id} className="items">
            <Item data={user} />
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
