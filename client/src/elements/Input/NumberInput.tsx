import { useRef, useState } from "react";
import style from "./Input.module.css";

type TProps<T extends Record<string, any>> = {
  value: number,
  title: string,
  name: string,
  validation?: string,
  onChange: (name: keyof T, value: number) => void;
}

export function NumberInput<T extends Record<string, any>>({ name, value, title, onChange, validation } : TProps<T>) {
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || value !== 0;
  const inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <div className={style.inputWrapper}>
      <input
        className={style.input}
        type="number"
        value={value}
        onChange={(e) => onChange(name, +e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        ref={inputRef}
      />
      <div className={`${style.title} ${isActive ? style.active : ""}`} onClick={() => inputRef.current ? inputRef.current.focus() : null}>{title}</div>
      {validation ? <div className={style.validationMessage}>{validation}</div> : null}
    </div>
  );
}
