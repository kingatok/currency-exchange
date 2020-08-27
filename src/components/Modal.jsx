import React, { useState, forwardRef, useImperativeHandle } from "react";
import ReactDOM from "react-dom";

const Modal = forwardRef(({ children }, ref) => {
  const [display, setDisplay] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
      closeModal: () => close(),
    };
  });

  const open = () => {
    setDisplay(true);
  };

  const close = () => {
    setDisplay(false);
  };

  if (display) {
    return ReactDOM.createPortal(
      <div className="modalWrapper">
        <div className="modal">{children}</div>
      </div>,
      document.getElementById("modal-root")
    );
  }
  return null;
});

export default Modal;
