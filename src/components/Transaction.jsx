import React, { useRef } from "react";
import Modal from "./Modal";

const Transaction = ({ title, euro, zloty, onDelete, id }) => {
  const modalRef = useRef();

  const openModal = () => {
    modalRef.current.openModal();
  };

  const closeModal = () => {
    modalRef.current.closeModal();
  };

  return (
    <div className="transactionWrapper">
      <h3>
        {title}: {euro} EUR ({(zloty * euro).toFixed(2)} PLN)
      </h3>
      <button onClick={openModal} className="deleteButton">
        X
      </button>
      <Modal ref={modalRef}>
        <h2>Cy na pewno chces usunąć transakcję?</h2>
        <button onClick={closeModal}>Nie</button>
        <button onClick={() => onDelete(id)}>Tak</button>
      </Modal>
    </div>
  );
};

export default Transaction;
