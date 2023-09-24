import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchRegister } from "../../api/userApi";
import { selectMain } from "../../store/mainSlice";
import { Form } from "../Form/Form";
import { TRegisterData } from "../../types/UserTypes";
import style from "./RegisterForm.module.css";

export function RegisterForm() {
  const { languageData: { registerForm } } = useAppSelector(selectMain);
  const dispatch = useAppDispatch();

  const validate = (name: keyof TRegisterData, value: string | number | boolean) => {
    if (typeof value === "number" || typeof value === "boolean") {
      return false;
    }
    switch (name) {
      case "name":
        return !value.match(/^\w{3,15}$/);
      case "phone":
        return !value.match(/^\+380\d{9}$/);
      case "password":
        return !value.match(/^\w{3,15}$/);
    }
  };

  const submit = (data: TRegisterData) => {
    console.log(data)
    dispatch(fetchRegister(data));
  }

  return (
    <Form<TRegisterData>
      className={style.registerForm}
      title={registerForm.title}
      validate={validate}
      submitButtonText={registerForm.submitButton}
      submitHandler={submit}
      fields={[
        {
          name: "name",
          type: "text",
          defaultValue: "JohnSmith",
          title: registerForm.nameTitle,
          errorMessage: registerForm.nameErrorMessage,
        },
        {
          name: "phone",
          type: "text",
          defaultValue: "+380972074559",
          title: registerForm.phoneTitle,
          errorMessage: registerForm.phoneErrorMessage,
        },
        {
          name: "password",
          type: "password",
          defaultValue: "lolokek",
          title: registerForm.passwordTitle,
          errorMessage: registerForm.passwordErrorMessage,
        },
      ]}
    />
  );
}
