import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Button } from "../../elements/Button/Button";
import { selectMain } from "../../store/mainSlice";
import { selectMenu } from "../../store/menuSlice";
import { Modal } from "../Modal/Modal";
import { NumberInput } from "../../elements/Input/NumberInput";
import { CreateMenuItemForm } from "../CreateMenuItemForm/CreateMenuItemForm";
import { fetchCreateMenuItem, fetchGetScaleBase, fetchUpdateScaleBase } from "../../api/menuApi";
import { TMenuItemCreate } from "../../types/MenuTypes";
import style from "./MenuAdminPanel.module.css";

export function MenuAdminPanel() {
  const { languageData: { menuCreate } } = useAppSelector(selectMain);
  const { scaleBase } = useAppSelector(selectMenu);
  const [ isShowAddModal, setIsShowAddModal] = useState(false);
  const [ currentScaleBase, setCurrentScaleBase] = useState(0);
  useEffect(() => {
    setCurrentScaleBase(scaleBase);
  }, [scaleBase]);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchGetScaleBase());
  }, [dispatch]);
  return(
    <>
      <Button
        title={menuCreate.addItemButton}
        onClick={() => setIsShowAddModal(true)}
      />
      <div className={style.scaleBaseWrapper}>
        <NumberInput
          title={menuCreate.scaleBaseTitle}
          value={currentScaleBase}
          name={menuCreate.scaleBaseTitle}
          onChange={(name, value) => setCurrentScaleBase(value)}
        />
        <Button
          title={menuCreate.setScaleBaseButton}
          onClick={() => dispatch(fetchUpdateScaleBase(currentScaleBase))}
        />
      </div>
      { isShowAddModal ?
        <Modal closeHandler={() => setIsShowAddModal(false)}>
          <CreateMenuItemForm
            closeHandler={() => setIsShowAddModal(false)}
            setDataHandler={(data: TMenuItemCreate) => dispatch(fetchCreateMenuItem(data))}
            submitButtonTitle={menuCreate.submitButton}
          />
        </Modal>
        : null
      }
  </>
  )
}
