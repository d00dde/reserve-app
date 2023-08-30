import { TCategory, TMenuItem } from "../../types/MenuTypes";
import { ReactNode } from "react";
import style from "./Accordion.module.css";

type TProps = {
  data: TCategory,
  itemHandler: (itemData: TMenuItem) => ReactNode,
};

export function Accordion({ data, itemHandler }: TProps) {
  return (
    <ul className={style.wrapper}>{data.subcategories.map(({ subCategoryName, items }) => (
      <li className={style.subcategory} key={subCategoryName}>
        <label htmlFor={`accordion_${subCategoryName}`}>{subCategoryName}</label>
        <input type="checkbox" id={`accordion_${subCategoryName}`} />
        <ul>{items.map(itemHandler)}</ul>
      </li>
      ))}
    </ul>
  )
}
