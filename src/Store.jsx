import React, { useState } from "react";
import "./Store.css";
const Store = ({
  id,
  image,
  company,
  name,
  description,
  price,
  removeCard,
}) => {
  const [showFullText, setshowFullText] = useState(false);

  return (
    <div className="mainContainer">
      <div className="storeContainer">
        <img src={image} alt={company} />

        <div className="importInfo">
          <h2>{name}</h2>
          <h2>${price}</h2>
        </div>
        <p>
          {showFullText ? description : `${description.slice(0, 233)}...`}
          <button onClick={() => setshowFullText(!showFullText)}>
            {showFullText ? "show less" : "read more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeCard(id)}>
          not interested
        </button>
      </div>
    </div>
  );
};

export default Store;
