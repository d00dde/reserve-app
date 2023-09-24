import { useState } from "react";
import { TMenuItem, TMenuItemCreate } from "../../types/MenuTypes";
import { Modal } from "../Modal/Modal";
import style from "./Menu.module.css";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchUpdateMenuItem, fetchDeleteMenuItem } from "../../api/menuApi";
import { selectMain } from "../../store/mainSlice";
import { Button } from "../../elements/Button/Button";
import { CreateMenuItemForm } from "../CreateMenuItemForm/CreateMenuItemForm";

export function AdminMenuItem ({ data }: { data: TMenuItem }) {
  const { languageData: { menuCreate } } = useAppSelector(selectMain);
  const [showPreview, setShowPreview] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const dispatch = useAppDispatch();
  const closeHandler = () => setShowPreview(false);
  const deleteHandler = (id: number) => {
    dispatch(fetchDeleteMenuItem(id));
  }
  return (
    <>
      <li
        key={data.id}
        className={style.menuItem}
      >
        <div className={style.data}>{data.name}</div>
        <div className={style.filler}></div>
        <div className={style.data}>{data.cost}</div>
        <div className={style.unit}>{data.unit}</div>
        <Button type="secondary" title="Preview" onClick={() => setShowPreview(true)}/>
        <Button type="secondary" title="Edit" onClick={() => setShowEdit(true)}/>
        <Button type="delete" title="X" onClick={() => deleteHandler(data.id)}/>
      </li>
      { showPreview ?
        <Modal closeHandler={closeHandler}>
          <div>{data.name}</div>
          <div>{data.description}</div>
          <div>{data.price}</div>
        </Modal>
        : null
      }
      { showEdit ?
        <Modal closeHandler={() => setShowEdit(false)}>
          <CreateMenuItemForm
            closeHandler={() => setShowEdit(false)}
            setDataHandler={(update: TMenuItemCreate) => dispatch(fetchUpdateMenuItem(data.id,  update))}
            defaultData={data}
            submitButtonTitle={menuCreate.editButton}
          />
        </Modal>
        : null
      }
    </>
  )
}
