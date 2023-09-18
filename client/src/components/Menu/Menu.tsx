import {useEffect, useMemo, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import { selectMenu } from "../../store/menuSlice";
import { selectUser } from "../../store/userSlice";
import styles from './Menu.module.css';
import { Accordion } from "../Accordion/Accordion";
import { MenuItem } from "./MenuItem";
import { TMenuItem } from "../../types/MenuTypes";
import { fetchGetUserMenu } from "../../api/menuApi";
import {MenuAdminPanel} from "../MenuAdminPanel/MenuAdminPanel";

export function Menu() {
  const { menuData } = useAppSelector(selectMenu);
  const { userData } = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchGetUserMenu());
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
    () => menuData.find((item) => item.categoryName === active),
    [ active, menuData ]
  );
  const itemHandler = (itemData: TMenuItem) => <MenuItem data={itemData} key={itemData.name}/>;
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
