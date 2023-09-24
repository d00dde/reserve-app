import style from "./Button.module.css";

type TButtonType =  "primary" | "secondary" | "delete";

type TProps = {
  type?: TButtonType,
  title: string,
  onClick: () => void;
}

export function Button({ title, onClick, type = "primary" } : TProps) {
  const typeClass = (type: TButtonType) => {
    switch (type) {
      case "primary": return style.primary;
      case "secondary": return style.secondary;
      case "delete": return style.delete;
    }
  }
  return (
    <button className={`${style.button} ${typeClass(type)}`} onClick={onClick}>{title}</button>
  );
}
