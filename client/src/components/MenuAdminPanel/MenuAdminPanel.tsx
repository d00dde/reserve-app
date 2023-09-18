import { useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { Button } from "../../elements/Button/Button";
import { selectMain } from "../../store/mainSlice";
import { Modal } from "../Modal/Modal";
import { CreateMenuItemForm } from "../CreateMenuItemForm/CreateMenuItemForm";

export function MenuAdminPanel() {
  const { languageData: { menu } } = useAppSelector(selectMain);
  const [ isShowAddModal, setIsShowAddModal] = useState(false);
  return(
    <>
      <Button
        title={menu.addItemButton}
        onClick={() => setIsShowAddModal(true)}
      />
      { isShowAddModal ?
        <Modal closeHandler={() => setIsShowAddModal(false)}>
          <CreateMenuItemForm closeHandler={() => setIsShowAddModal(false)} />
        </Modal>
        : null}
  </>
  )
}
