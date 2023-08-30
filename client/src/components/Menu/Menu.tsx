import { useMemo, useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { selectMenu } from "../../store/menuSlice";
import styles from './Menu.module.css';
import { Accordion } from "../Accordion/Accordion";
import { MenuItem } from "./MenuItem";
import {TMenuItem} from "../../types/MenuTypes";

export function Menu() {
  const { menuData } = useAppSelector(selectMenu);
  const [ active, setActive ] = useState(menuData[0].categoryName);
  const categoryData = useMemo(
    () => menuData.find((item) => item.categoryName === active),
    [ active, menuData ]
  );
  const itemHandler = (itemData: TMenuItem) => <MenuItem data={itemData} key={itemData.name}/>;
  return(
    <>
      <div className={styles.categories}>{menuData.map(({ categoryName}) => (
        <div
          className={`${styles.category} ${categoryName === active ? styles.active : ""}`}
          key={categoryName}
          onClick={() => setActive(categoryName)}
        >{categoryName}</div>
      ))}</div>
      <Accordion data={categoryData!} key={categoryData!.categoryName} itemHandler={itemHandler} />
  </>
  )
}
