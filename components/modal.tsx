import { Dialog } from "@headlessui/react";
import { useRef } from "react";
import style from '@/styles/Modal.module.css'

export default function Modal({ onClose = () => {}, children }) {
  let overlayRef = useRef<HTMLInputElement>(null);

  return (
    <Dialog
      static
      open={true}
      onClose={onClose}
      initialFocus={overlayRef}
      className={`fixed inset-0 z-10 flex items-center justify-center`}
    >
      <Dialog.Overlay
        ref={overlayRef}
        className="fixed inset-0 bg-gray-800/60"
      />
      <div className={`relative flex items-center justify-center w-1/2  ${style.modal}`}>
        {children}
      </div>
    </Dialog>
  );
}