import style from "./Input.module.css";

type TProps<T extends Record<string, any>> = {
  value: boolean,
  title: string,
  name: string,
  onChange: (name: keyof T, value: boolean) => void;
}

export function CheckboxInput<T extends Record<string, any>>({ name, value, title, onChange, } : TProps<T>) {
  return (
    <div className={style.checkboxWrapper}>
      <div className={style.checkboxTitle}>{title}</div>
      <input
        type="checkbox"
        checked={value}
        onChange={() => onChange(name, !value)}
      />
    </div>
  );
}
