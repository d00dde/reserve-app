import { useEffect, useState } from "react";
import style from "./TablesList.module.css";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectTables } from "../../store/tableSlice";
import { fetchGetTables } from "../../api/tablesApi";
import { Modal } from "../Modal/Modal";
import { CreateTableForm } from "../CreateTableForm/CreateTableForm";

export function TablesList() {
  const { tables } = useAppSelector(selectTables);
  const dispatch = useAppDispatch();
  const [ showAddModal, setShowAddModal] = useState(false);
  const closeModalHandler = () => setShowAddModal(false);
  useEffect(() => {
    dispatch(fetchGetTables());
  }, []);
  return (
    <>
      <div className="addButton" onClick={() => setShowAddModal(true)}>+ ADD TABLE</div>
      { showAddModal ?
        <Modal closeHandler={closeModalHandler}>
          <CreateTableForm closeHandler={closeModalHandler} />
        </Modal>
      : null }
      <ul className={style.tablesList}>
        {tables.map((table) => <li key={table.id}>Name: {table.name} | min: {table.places_min} | max: {table.places_max}</li>)}
      </ul>
    </>
  )
}
