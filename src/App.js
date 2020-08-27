import React, { useState } from "react";
import TransactionCreator from "./components/TransactionCreator";
import TransactionsList from "./components/TransactionsList";
import "./App.css";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [zloty, setZloty] = useState(4);

  const handleZloty = (e) => {
    setZloty(e.target.value);
  };

  const handleDelete = (id) => {
    const updatedTransactions = transactions.filter((item) => item.id !== id);
    setTransactions([...updatedTransactions]);
  };

  const highestTransaction = Math.max(...transactions.map((item) => item.euro));
  const sumInEuro = transactions.reduce(
    (acc, val) => acc + Number(val.euro),
    0
  );

  return (
    <div className="app">
      <div>1 EURO = {zloty} PLN</div>
      <label>
        Zmień Przelicznik
        <input
          className="input"
          type="text"
          value={zloty}
          onChange={handleZloty}
        />
      </label>
      <TransactionCreator
        transactions={transactions}
        setTransactions={setTransactions}
      />
      <TransactionsList
        transactions={transactions}
        zloty={zloty}
        onDelete={handleDelete}
      />
      <div>
        Transakcja o największej kwocie: {highestTransaction} (
        {(highestTransaction * zloty).toFixed(2)} PLN)
      </div>
      <div>
        Suma wszystkich transakcji: {sumInEuro} euro (
        {(sumInEuro * zloty).toFixed(2)} PLN)
      </div>
    </div>
  );
};

export default App;
