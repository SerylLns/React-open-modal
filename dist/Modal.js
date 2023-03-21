import React from 'react';
import './modal.css';
export default function Modal({
  children,
  open = true,
  onClose = () => {}
}) {
  const [isOpen, setIsOpen] = React.useState(open);
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
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