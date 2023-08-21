import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchLogin } from "../../api/userApi";
import { selectMain } from "../../store/mainSlice";

export function LoginForm() {
  const { languageData: { loginForm } } = useAppSelector(selectMain);
  const [phone, setPhone] = useState("+380972074557");
  const [password, setPassword] = useState("lolofre");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const dispatch = useAppDispatch();

  const phoneInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.value.match(/^\+380\d{9}$/)) {
      setPhoneError("");
    }
    else {
      setPhoneError(loginForm.phoneErrorMessage);
    }
    setPhone(e.target.value);
  }

  const passwordInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.value.match(/^\+380\d{9}$/)) {
      setPasswordError("");
    }
    else {
      setPasswordError(loginForm.passwordErrorMessage);
    }
    setPassword(e.target.value);
  }

  const submitHandler = () => {
    if(phoneError || passwordError) {
      return;
    }
    dispatch(fetchLogin({ phone, password }));
  }

  return (
    <div className="login-form">
      <h2 className="title">{loginForm.title}</h2>
      <input
        type="text"
        placeholder={loginForm.phonePlaceholder}
        onChange={phoneInputHandler}
        value={phone}
      />
      {phoneError ? <div className="validation phone">{phoneError}</div> : null}
      <input
        type="password"
        placeholder={loginForm.passwordPlaceholder}
        onChange={passwordInputHandler}
        value={password}
      />
      <button onClick={submitHandler}>{loginForm.submitButton}</button>
      {passwordError ? <div className="validation password">{passwordError}</div> : null}
    </div>
  );
}
