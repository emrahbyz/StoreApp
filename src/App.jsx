// App.js
import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Stor from "./Stor";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [store, setStore] = useState([]);

  const fetchStore = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://course-api.com/react-store-products"
      );
      const result = await response.json();
      setLoading(false);
      setStore(result);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStore();
  }, []);

  const removeCard = (id) => {
    const updatedStore = store.filter((item) => item.id !== id);
    setStore(updatedStore);
  };

  const refreshBtn = () => {
    fetchStore();
  };

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <div>
          <header>
            <h1>Welcome To Store</h1>
          </header>
          <Stor store={store} removeCard={removeCard} />
          {store.length === 0 && (
            <button className="refreshBtn" onClick={refreshBtn}>
              Refresh
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
