import React, { useEffect } from 'react';
import './modal.css';
export default function Modal({
  children,
  open = true,
  onClose = () => {}
}) {
  const [isOpen, setIsOpen] = React.useState(open);
  useEffect(() => {
    setIsOpen(open);
  }, [open]);
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      setIsOpen(true);
    } else {
      document.body.style.overflow = 'auto';
      setIsOpen(false);
    }
  }, [open]);
  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };
  const modal = /*#__PURE__*/React.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/React.createElement("span", {
    className: "close",
    onClick: handleClose
  }, "\xD7"), /*#__PURE__*/React.createElement("p", null, children)));
  return isOpen && modal;
}