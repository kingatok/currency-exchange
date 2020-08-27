import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TransactionCreator = ({ transactions, setTransactions }) => {
  const [title, setTitle] = useState();
  const [euro, setEuro] = useState();
  const [error, setError] = useState();

  const handleTitle = (e) => {
    const { value } = e.target;
    setTitle(value);
    setError(null);
  };
  const handleEuro = (e) => {
    const { value } = e.target;
    setEuro(value);
    setError(null);
  };

  const addTransaction = () => {
    if (!title) {
      setError("Podaj nazwę transakcji");
      return;
    }
    if (!euro || isNaN(euro) || Number(euro) < 0) {
      setError("Podaj prawidłową wartość transakcji");
      return;
    }
    setTransactions([...transactions, { id: uuidv4(), title, euro }]);
    setTitle("");
    setEuro("");
  };

  return (
    <>
      <div className="creatorWrapper">
        <div className="inputWrapper">
          <label className="label">
            Nazwa transakcji
            <input
              className="input"
              type="text"
              value={title}
              onChange={handleTitle}
            />
          </label>
        </div>
        <div className="inputWrapper">
          <label className="label">
            Kwota w euro
            <input
              className="input"
              type="text"
              value={euro}
              onChange={handleEuro}
            />
          </label>
        </div>
        {error && <div>{error}</div>}
        <button className="addButton" onClick={addTransaction}>
          Dodaj transakcję
        </button>
      </div>
    </>
  );
};

export default TransactionCreator;
