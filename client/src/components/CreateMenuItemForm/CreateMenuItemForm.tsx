import { useAppSelector } from "../../store/hooks";
import { selectMain } from "../../store/mainSlice";
import { selectMenu } from "../../store/menuSlice";
import { Form } from "../Form/Form";
import { TMenuItemCreate } from "../../types/MenuTypes";
import { useMemo } from "react";

type TProps = {
  closeHandler: () => void;
  setDataHandler: (data: TMenuItemCreate) => void;
  defaultData?: TMenuItemCreate,
  submitButtonTitle: string,
}

export function CreateMenuItemForm({ closeHandler, setDataHandler, defaultData, submitButtonTitle }: TProps) {
  const { languageData: { menuCreate } } = useAppSelector(selectMain);
  const { menuData } = useAppSelector(selectMenu);
  const categories = useMemo(() => menuData.map((item) => item.categoryName), [menuData]);
  const subCategories = useMemo(() => menuData.map(
    (item) => item.subcategories.map((subItem) => subItem.subCategoryName)).flat(),
    [menuData]
  );
  const validate = (name: keyof TMenuItemCreate, value: string | number | boolean) => {
    return false;
    // switch (name) {
    //   case "tableName":
    //     return typeof value !== "string" || value.length < 3;
    //   case "placesMin":
    //     return typeof value !== "number" || value < 1 || value > 10;
    //   case "placesMax":
    //     return typeof value !== "number" || value < 1 || value > 10;
    // }
  };

  const submit = (data: TMenuItemCreate) => {
    setDataHandler(data);
    closeHandler();
  }

  return (
    <Form<TMenuItemCreate>
      title={menuCreate.createItemTitle}
      validate={validate}
      submitButtonText={submitButtonTitle}
      submitHandler={submit}
      fields={[
        {
          name: "category",
          type: "autocomplete",
          defaultValue: defaultData ? defaultData.category : "",
          title: menuCreate.categoryTitle,
          errorMessage: menuCreate.categoryErrorMessage,
          datalist: categories,
        },
        {
          name: "subCategory",
          type: "autocomplete",
          defaultValue: defaultData ? defaultData.subCategory : "",
          title: menuCreate.subCategoryTitle,
          errorMessage: menuCreate.subCategoryErrorMessage,
          datalist: subCategories,
        },
        {
          name: "name",
          type: "text",
          defaultValue: defaultData ? defaultData.name : "",
          title: menuCreate.nameTitle,
          errorMessage: menuCreate.nameErrorMessage,
        },
        {
          name: "description",
          type: "textArea",
          defaultValue: defaultData ? defaultData.description : "",
          title: menuCreate.descriptionTitle,
          errorMessage: menuCreate.descriptionErrorMessage,
        },
        {
          name: "photoUrl",
          type: "text",
          defaultValue: defaultData ? defaultData.photoUrl : "",
          title: menuCreate.photoUrlTitle,
          errorMessage: menuCreate.photoUrlErrorMessage,
        },
        {
          name: "price",
          type: "number",
          defaultValue: defaultData ? defaultData.price : 0,
          title: menuCreate.priceTitle,
          errorMessage: menuCreate.priceErrorMessage,
        },
        {
          name: "unit",
          type: "text",
          defaultValue: defaultData ? defaultData.unit : "",
          title: menuCreate.unitTitle,
          errorMessage: menuCreate.unitErrorMessage,
        },
        {
          name: "scale",
          type: "number",
          defaultValue: defaultData ? defaultData.scale : 0,
          title: menuCreate.scaleTitle,
          errorMessage: menuCreate.scaleErrorMessage,
        },
        {
          name: "isScaled",
          type: "checkbox",
          defaultValue: defaultData ? defaultData.isScaled : false,
          title: menuCreate.isScaledTitle,
          errorMessage: "",
        },
      ]}
    />
  )
}
