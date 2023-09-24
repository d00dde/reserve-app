import { useState } from "react";
import { Input } from "../../elements/Input/Input";
import { PasswordInput } from "../../elements/Input/PasswordInput";
import { NumberInput } from "../../elements/Input/NumberInput";
import { TextArea } from "../../elements/Input/TextArea";
import { CheckboxInput } from "../../elements/Input/CheckboxInput";
import { Button } from "../../elements/Button/Button";
import { Title } from "../../elements/Title/Title";
import { AutocompleteInput } from "../../elements/Input/AutocompleteInput";

type TProps<T extends Record<string, any>> = {
  title: string,
  className?: string,
  validate: (item: keyof T, value: string | number | boolean) => boolean,
  fields: {
    type: "text" | "password" | "number" | "checkbox" | "textArea" | "autocomplete",
    defaultValue?: string | number | boolean,
    datalist?: string[],
    name: keyof T,
    title: string,
    errorMessage: string,
  }[],
  submitHandler: (data: T) => void,
  submitButtonText: string,
}

export function Form<T extends Record<string, string | number | boolean>>({ className, title, fields, validate, submitHandler, submitButtonText }: TProps<T>) {
  const [formData, setFormData] = useState<T>(() => {
    return fields.reduce((state, item) => {
      state[item.name] = (item.defaultValue ??
        (item.type === "number" ? 0 : item.type === "checkbox" ? false : "")
      ) as T[keyof T];
      return state;
    }, {} as T);
  });

  const [formErrors, setFormErrors] = useState<Record<keyof T, boolean>>(() => {
    return fields.reduce((state, item) => {
      state[item.name] = false;
      return state;
    }, {} as Record<keyof T, boolean>);
  });

  const formHandler = (name: keyof T, value: string | number | boolean) => {
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
          case "textArea": return <TextArea
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
            value={formData[input.name] as string}
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
          case "checkbox": return <CheckboxInput
            onChange={formHandler}
            name={input.name.toString()}
            key={input.name.toString()}
            title={input.title}
            value={formData[input.name] as unknown as boolean}
          />;
          case "autocomplete": return <AutocompleteInput
            onChange={formHandler}
            name={input.name.toString()}
            key={input.name.toString()}
            title={input.title}
            value={formData[input.name] as string}
            datalist={input.datalist ?? []}
            validation={formErrors[input.name] ? input.errorMessage : undefined}
          />;
        }
      })}
      <Button title={submitButtonText} type="primary" onClick={submit}/>
    </div>
  )
}
