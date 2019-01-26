import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../shared/SharedStyles';
import { ModalWrapper, ModalBody } from './ModalStyles';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown, false);
  }

  handleKeyDown = ({ keyCode }) => {
    const { handleClose } = this.props;
    if (keyCode === 27) {
      handleClose();
    }
  }

  render() {
    const {
      children,
      openModal,
      handleClose,
      handleOutsideClick,
      modalRef,
      buttonRef
    } = this.props;

    const showHideClassName = openModal ? 'u-visible' : 'u-hidden';

    return (
      <ModalWrapper
        className={`modal ${showHideClassName}`}
        aria-labelledby="dialog-overlay"
        onClick={handleOutsideClick}
      >
        <ModalBody
          className="modal__body"
          ref={modalRef}
          role="dialog"
          aria-label="dialog"
        >
          <Button
            className="modal__close icon-close"
            aria-labelledby="close-modal"
            onClick={handleClose}
            ref={buttonRef}
          >
            close
          </Button>
          {children}
        </ModalBody>
      </ModalWrapper>
    );
  }
}

Modal.propTypes = {
  modalRef: PropTypes.func.isRequired,
  buttonRef: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  openModal: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleOutsideClick: PropTypes.func.isRequired
};

export default Modal;
