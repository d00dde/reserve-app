import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import style from "./Modal.module.css";

export function Modal ({ children, closeHandler } : PropsWithChildren<{ closeHandler: () => void }>) {
  return createPortal(
    <div className={style.wrapper} onClick={closeHandler}>
      <div className={style.content}>
        {children}
      </div>
    </div>,
    document.querySelector("#modal")!
  );
}
