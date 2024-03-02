import React, { useState } from "react";

import "./Store.css";
const Store = ({ store, removeCard }) => {
  const [showFullText, setshowFullText] = useState(false);

  const toggleShowText = () => {
    setshowFullText(!showFullText);
  };

  return (
    <div className="mainContainer">
      {store.map((item) => (
        <div className="storeContainer" key={item.id}>
          <img src={item.image} alt={item.company} />
          <div className="importInfo">
            <h2> Name : {item.name} </h2>
            <h2> Price : $ {item.price} </h2>
          </div>
          <p>
            {showFullText
              ? item.description
              : `${item.description.slice(0, 233)}...`}
            <button onClick={toggleShowText}>
              {showFullText ? "Show less" : "Read More"}
            </button>
          </p>
          <button onClick={() => removeCard(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Store;
