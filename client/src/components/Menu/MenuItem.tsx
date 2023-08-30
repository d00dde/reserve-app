import { useState } from "react";
import { TMenuItem } from "../../types/MenuTypes";
import { Modal } from "../Modal/Modal";

export function MenuItem ({ data }: { data: TMenuItem }) {
  const [showModal, setShowModal] = useState(false);
  const closeHandler = () => setShowModal(false);
  return (
    <>
      <li key={data.name} onClick={() => setShowModal(true)}>{data.name} : {data.price}</li>
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
