import React from "react";
import "../List/List.css";

function List({ items, handleDeleteItems }) {
  return (
    <ul>
      {items.map((item, index) => (
        <div key={index} className="listitem">
          <li>{item}</li>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => handleDeleteItems(index)}
          >
            ❌
          </span>
        </div>
      ))}
    </ul>
  );
}

export default List;
