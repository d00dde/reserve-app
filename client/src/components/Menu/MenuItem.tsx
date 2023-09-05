import { useState } from "react";
import { TMenuItem } from "../../types/MenuTypes";
import { Modal } from "../Modal/Modal";
import style from "./Menu.module.css";

export function MenuItem ({ data }: { data: TMenuItem }) {
  const [showModal, setShowModal] = useState(false);
  const closeHandler = () => setShowModal(false);
  return (
    <>
      <li
        key={data.name}
        onClick={() => setShowModal(true)}
        className={style.menuItem}
      >
        <div className={style.data}>{data.name}</div>
        <div className={style.filler}></div>
        <div className={style.data}>{data.price}</div>
      </li>
      { showModal ?
        <Modal closeHandler={closeHandler}>
          <div>{data.name}</div>
          <div>{data.description}</div>
          <div>{data.price}</div>
        </Modal>
        : null
      }
    </>
  )
}
