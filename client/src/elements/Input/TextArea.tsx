import { useRef, useState } from "react";
import style from "./Input.module.css";

type TProps<T extends Record<string, any>> = {
  value: string,
  title: string,
  name: keyof T,
  validation?: string,
  onChange: (name: keyof T, value: string) => void;
}

export function TextArea<T extends Record<string, any>>({ name, value, title, onChange, validation } : TProps<T>) {
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || value !== "";
  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  return (
    <div className={style.inputWrapper}>
      <textarea
        // className={style.input}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        ref={inputRef}
      />
      <div className={`${style.title} ${isActive ? style.active : ""}`} onClick={() => inputRef.current ? inputRef.current.focus() : null}>{title}</div>
      {validation ? <div className={style.validationMessage}>{validation}</div> : null}
    </div>
  );
}
