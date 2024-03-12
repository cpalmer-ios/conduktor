import React from "react"

interface ModalProps {
  handleClose: () => void;
  show: boolean;
  children: unknown;
}

export const Modal : React.FC<ModalProps> = ({ handleClose, show, children }: any) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};