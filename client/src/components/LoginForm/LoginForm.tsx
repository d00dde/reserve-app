import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchLogin } from "../../api/userApi";
import { selectMain } from "../../store/mainSlice";
import { Form } from "../Form/Form";
import { TLoginData } from "../../types/UserTypes";
import style from "./LoginForm.module.css";

export function LoginForm() {
  const { languageData: { loginForm } } = useAppSelector(selectMain);
  const dispatch = useAppDispatch();

  const validate = (name: keyof TLoginData, value: string | number) => {
    if (typeof value === "number") {
      return false;
    }
    switch (name) {
      case "phone":
        return !value.match(/^\+380\d{9}$/);
      case "password":
        return !value.match(/^\w{3,15}$/);
    }
  };

  const submit = (data: TLoginData) => {
    dispatch(fetchLogin(data));
  }

  return (
    <Form<TLoginData>
      className={style.loginForm}
      title={loginForm.title}
      validate={validate}
      submitButtonText={loginForm.submitButton}
      submitHandler={submit}
      fields={[
        {
          name: "phone",
          type: "text",
          defaultValue: "+380972074557",
          title: loginForm.phoneTitle,
          errorMessage: loginForm.phoneErrorMessage,
        },
        {
          name: "password",
          type: "password",
          defaultValue: "lolofre",
          title: loginForm.passwordTitle,
          errorMessage: loginForm.passwordErrorMessage,
        },
      ]}
    />
  );
}
