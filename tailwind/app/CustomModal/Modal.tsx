"use client";

import { useEffect } from "react";
import ReactDOM from "react-dom";

interface Props {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ open, onClose, children }: Props) => {
  useEffect(() => {
    const body = document.querySelector("body");
    console.log(children);
  }, [open]);
  const root =
    typeof document !== "undefined"
      ? document.querySelector("#modal-root")
      : null;
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div
        onClick={onClose}
        className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)]"
      >
        <div
          onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
          className="w-fit h-auto relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white"
        >
          {children}
        </div>
      </div>
    </>,
    root as HTMLElement
  );
};

export default Modal;
