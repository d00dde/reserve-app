import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectMain } from "../../store/mainSlice";
import { fetchCreateTable } from "../../api/tablesApi";
import { Form } from "../Form/Form";
import { TCreateData } from "../../types/TablesTypes";

type TProps = {
  closeHandler: () => void;
}

export function CreateTableForm({ closeHandler }: TProps) {
  const dispatch = useAppDispatch();
  const { languageData: { createTableForm } } = useAppSelector(selectMain);

  const validate = (name: keyof TCreateData, value: string | number) => {
    switch (name) {
      case "tableName":
        return typeof value !== "string" || value.length < 3;
      case "placesMin":
        return typeof value !== "number" || value < 1 || value > 10;
      case "placesMax":
        return typeof value !== "number" || value < 1 || value > 10;
    }
  };

  const submit = (data: TCreateData) => {
    dispatch(fetchCreateTable(data));
    closeHandler();
  }

  return (
    <Form<TCreateData>
      title={createTableForm.title}
      validate={validate}
      submitButtonText={createTableForm.submitButton}
      submitHandler={submit}
      fields={[
        {
          name: "tableName",
          type: "text",
          title: createTableForm.tableNameTitle,
          errorMessage: createTableForm.tableNameErrorMessage,
        },
        {
          name: "placesMin",
          type: "number",
          title: createTableForm.minPlacesTitle,
          errorMessage: createTableForm.minPlacesErrorMessage,
        },
        {
          name: "placesMax",
          type: "number",
          title: createTableForm.maxPlacesTitle,
          errorMessage: createTableForm.maxPlacesErrorMessage,
        },
      ]}
    />
  )
}
