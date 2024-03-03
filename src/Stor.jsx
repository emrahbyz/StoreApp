import React from "react";
import Store from "./Store";
import "./Store.css";

export default function Stor({ store, removeCard }) {
  return (
    <div className="mainContainer">
      {store.map((store) => {
        return <Store key={store.id} {...store} removeCard={removeCard} />;
      })}
    </div>
  );
}
