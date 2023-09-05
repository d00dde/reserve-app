import { useState } from "react";
import { Input } from "../../elements/Input/Input";
import { PasswordInput } from "../../elements/Input/PasswordInput";
import { NumberInput } from "../../elements/Input/NumberInput";
import { Button } from "../../elements/Button/Button";
import { Title } from "../../elements/Title/Title";

type TProps<T extends Record<string, any>> = {
  title: string,
  className?: string,
  validate: (item: keyof T, value: string | number) => boolean,
  fields: {
    type: "text" | "password" | "number",
    defaultValue?: string,
    name: keyof T,
    title: string,
    errorMessage: string,
  }[],
  submitHandler: (data: T) => void,
  submitButtonText: string,
}

export function Form<T extends Record<string, string | number>>({ className, title, fields, validate, submitHandler, submitButtonText }: TProps<T>) {
  const [formData, setFormData] = useState<T>(() => {
    return fields.reduce((state, item) => {
      state[item.name] = (item.defaultValue ?? (item.type === "number" ? 0 : "")) as T[keyof T];
      return state;
    }, {} as T);
  });

  const [formErrors, setFormErrors] = useState<Record<keyof T, boolean>>(() => {
    return fields.reduce((state, item) => {
      state[item.name] = false;
      return state;
    }, {} as Record<keyof T, boolean>);
  });

  const formHandler = (name: keyof T, value: string | number) => {
    setFormErrors((prev ) => ({ ...prev, [name]: validate(name, value) }));
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const submit = () => {
    const errors = Object.entries(formData).map(([key, value]) => validate(key as keyof T, value));
    if (errors.some((item) => item)) {
      return;
    }
    submitHandler(formData);
  }

  return (
    <div className={className ?? ""}>
      <Title content={title} />
      {fields.map((input) => {
        switch (input.type) {
          case "text": return <Input
            onChange={formHandler}
            name={input.name.toString()}
            key={input.name.toString()}
            title={input.title}
            value={formData[input.name] as string}
            validation={formErrors[input.name] ? input.errorMessage : undefined}
          />;
          case "password": return <PasswordInput
            onChange={formHandler}
            name={input.name.toString()}
            key={input.name.toString()}
            title={input.title}
            value={formData[input.name] as number}
            validation={formErrors[input.name] ? input.errorMessage : undefined}
          />;
          case "number": return <NumberInput
            onChange={formHandler}
            name={input.name.toString()}
            key={input.name.toString()}
            title={input.title}
            value={formData[input.name] as number}
            validation={formErrors[input.name] ? input.errorMessage : undefined}
          />;
        }
      })}
      <Button title={submitButtonText} type="primary" onClick={submit}/>
    </div>
  )
}
