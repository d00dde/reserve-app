import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchRegister } from "../../api/userApi";
import { selectMain } from "../../store/mainSlice";

export function RegisterForm() {
  const { languageData: { registerForm } } = useAppSelector(selectMain);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+380972074557");
  const [password, setPassword] = useState("lolofre");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const dispatch = useAppDispatch();

  const nameInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.value.match(/^\w{3,15}$/)) {
      setNameError("");
    }
    else {
      setNameError(registerForm.nameErrorMessage);
    }
    setName(e.target.value);
  }

  const phoneInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.value.match(/^\+380\d{9}$/)) {
      setPhoneError("");
    }
    else {
      setPhoneError(registerForm.phoneErrorMessage);
    }
    setPhone(e.target.value);
  }

  const passwordInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.value.match(/^\+380\d{9}$/)) {
      setPasswordError("");
    }
    else {
      setPasswordError(registerForm.passwordErrorMessage);
    }
    setPassword(e.target.value);
  }

  const submitHandler = () => {
    if(nameError || phoneError || passwordError) {
      return;
    }
    dispatch(fetchRegister({ name, phone, password }));
  }

  return (
    <div className="login-form">
      <h2 className="title">{registerForm.title}</h2>
      <input
        type="text"
        placeholder={registerForm.namePlaceholder}
        onChange={nameInputHandler}
        value={name}
      />
      {nameError ? <div className="validation name">{nameError}</div> : null}
      <input
        type="text"
        placeholder={registerForm.phonePlaceholder}
        onChange={phoneInputHandler}
        value={phone}
      />
      {phoneError ? <div className="validation phone">{phoneError}</div> : null}
      <input
        type="password"
        placeholder={registerForm.passwordPlaceholder}
        onChange={passwordInputHandler}
        value={password}
      />
      <button onClick={submitHandler}>{registerForm.submitButton}</button>
      {passwordError ? <div className="validation password">{passwordError}</div> : null}
    </div>
  );
}
