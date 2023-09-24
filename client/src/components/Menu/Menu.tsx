import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectMenu } from "../../store/menuSlice";
import { selectUser } from "../../store/userSlice";
import styles from './Menu.module.css';
import { MenuAdminPanel } from "../MenuAdminPanel/MenuAdminPanel";
import { Accordion } from "../Accordion/Accordion";
import { MenuItem } from "./MenuItem";
import { AdminMenuItem } from "./AdminMenuItem";
import { TMenuItem } from "../../types/MenuTypes";
import { fetchGetMenu } from "../../api/menuApi";

export function Menu() {
  const { menuData } = useAppSelector(selectMenu);
  const { userData } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchGetMenu());
  }, [dispatch]);
  const [ active, setActive ] = useState("");
  useEffect(() => {
    if(menuData.length === 0) {
      setActive("");
    }
    else {
      setActive(menuData[0].categoryName);
    }
  }, [menuData]);
  const categoryData = useMemo(
    () => {
      const activeCategory = menuData.find((item) => item.categoryName === active);
      if (activeCategory) {
        return activeCategory;
      }
      return menuData[0];
    },
    [ active, menuData ]
  );
  const itemHandler = (itemData: TMenuItem) => userData.role === "admin" ? <AdminMenuItem data={itemData} key={itemData.name}/> : <MenuItem data={itemData} key={itemData.name}/>;
  return(
    <>
      {active ?
      <>
        {userData.role === "admin" ? <MenuAdminPanel /> : null}
        <div className={styles.categories}>{menuData.map(({ categoryName}) => (
          <div
            className={`${styles.category} ${categoryName === active ? styles.active : ""}`}
            key={categoryName}
            onClick={() => setActive(categoryName)}
          >{categoryName}</div>
        ))}</div>
        <Accordion data={categoryData!} key={categoryData!.categoryName} itemHandler={itemHandler} />
      </>
      : null}
  </>
  )
}
