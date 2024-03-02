import React from "react";
import "./Store.css";

const Store = ({ store, removeCard }) => {
  return (
    <div className="mainContainer">
      {store.map((item) => (
        <StoreItem key={item.id} item={item} removeCard={removeCard} />
      ))}
    </div>
  );
};

const StoreItem = ({ item, removeCard }) => {
  const [showFullText, setShowFullText] = React.useState(false);

  const toggleShowText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="storeContainer">
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
  );
};

export default Store;
