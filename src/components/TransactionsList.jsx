import React from "react";
import Transaction from "./Transaction";

const TransactionsList = ({ transactions, zloty, onDelete, openModal }) => {
  return transactions?.map((item, i) => (
    <Transaction
      onDelete={onDelete}
      key={item.id}
      id={item.id}
      title={item.title}
      euro={item.euro}
      zloty={zloty}
      openModal={openModal}
    />
  ));
};

export default TransactionsList;
