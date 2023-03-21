import React, { useEffect } from 'react'
import './modal.css'

export default function Modal({ children, open= true, onClose=()=>{}}) {
  const [isOpen, setIsOpen] = React.useState(open)

  useEffect(() => {
    setIsOpen(open)
  },[open])

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      setIsOpen(true)
    } else {
      document.body.style.overflow = 'auto'
      setIsOpen(false);
    }
  }, [open])

  const handleClose = () => {
    setIsOpen(false)
    onClose()
  }
  const modal = (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <p>{children}</p>
      </div>
    </div>
  );
  return (
    isOpen && modal
  )
}
