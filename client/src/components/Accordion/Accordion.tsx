import { TCategory, TMenuItem } from "../../types/MenuTypes";
import { ReactNode } from "react";
import style from "./Accordion.module.css";

type TProps = {
  data: TCategory,
  itemHandler: (itemData: TMenuItem) => ReactNode,
};

export function Accordion({ data, itemHandler }: TProps) {
  return (
    <ul className={style.wrapper}>
      {data.subcategories.map(({ subCategoryName, items }) => (
      <li className={style.subcategory} key={subCategoryName}>
        <label htmlFor={`accordion_${subCategoryName}`}>
          <div>{subCategoryName}</div>
          <div className={style.openSign}>+</div>
        </label>
        <input type="checkbox" id={`accordion_${subCategoryName}`} />
        <ul className={style.collapse}>{items.map(itemHandler)}</ul>
      </li>
      ))}
    </ul>
  )
}
