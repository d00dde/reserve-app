import { useRef, useState } from "react";
import style from "./Input.module.css";

type TProps<T extends Record<string, any>> = {
  value: string | number,
  title: string,
  name: keyof T,
  validation?: string,
  onChange: (name: keyof T, value: string) => void;
}

export function PasswordInput<T extends Record<string, any>>({ name, value, title, onChange, validation } : TProps<T>) {
  const [currentType, setCurrentType] = useState("password");
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || value !== "";
  const inputRef = useRef<HTMLInputElement | null>(null);
  const changeHideHandler = () => currentType === "password" ? setCurrentType("text") : setCurrentType("password");
  return (
    <div className={style.inputWrapper}>
      <input
        className={style.input}
        type={currentType}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        ref={inputRef}
      />
      <div className={`${style.title} ${isActive ? style.active : ""}`} onClick={() => inputRef.current ? inputRef.current.focus() : null}>{title}</div>
      <div className={style.changeHide} onClick={changeHideHandler}>CH</div>
      {validation ? <div className={style.validationMessage}>{validation}</div> : null}
    </div>
  );
}
