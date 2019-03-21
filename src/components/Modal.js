import React, { Component } from "react";

class Modal extends Component {

  render() {
    const { children, show, handleClose } = this.props;
    const showHideClassName = show ? "modal-container display-block" : "modal-container display-none";
    return (
      <div className={showHideClassName}>
        <div className="modal-wrapper">
          <div className="modal-header">
            <span style={{ cursor: 'pointer'}} onClick={handleClose}>&times;</span>
          </div>
          <div className="modal-content">{children}</div>
        </div>
      </div>
    );
  }
}

export default Modal;
