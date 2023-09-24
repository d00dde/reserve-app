import { useRef, useState } from "react";
import style from "./Input.module.css";

type TProps<T extends Record<string, any>> = {
  value: string,
  title: string,
  name: keyof T,
  validation?: string,
  datalist: string[],
  onChange: (name: keyof T, value: string) => void;
}

export function AutocompleteInput<T extends Record<string, any>>({ name, value, title, onChange, validation, datalist } : TProps<T>) {
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || value !== "";
  const inputRef = useRef<HTMLInputElement | null>(null);
  const datalistId = `datalistId-${Math.random()}`;
  return (
    <div className={style.inputWrapper}>
      <input
        className={style.input}
        type="text"
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        ref={inputRef}
        list={datalistId}
      />
      <datalist id={datalistId}>
        {datalist.map((item) => <option value={item} key={item} />)}
      </datalist>
      <div className={`${style.title} ${isActive ? style.active : ""}`} onClick={() => inputRef.current ? inputRef.current.focus() : null}>{title}</div>
      {validation ? <div className={style.validationMessage}>{validation}</div> : null}
    </div>
  );
}
