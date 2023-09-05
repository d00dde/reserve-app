import { MouseEvent, PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import style from "./Modal.module.css";

export function Modal ({ children, closeHandler } : PropsWithChildren<{ closeHandler: () => void }>) {
  const closeChecker = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLDivElement) {
      if (e.target.className.includes("close")) {
        closeHandler();
      }
    }
  };
  return createPortal(
    <div className={`${style.wrapper} close`} onClick={closeChecker}>
      <div className={style.content}>
        <div className={`${style.closeBtn} close`}>X</div>
        {children}
      </div>
    </div>,
    document.querySelector("#modal")!
  );
}
