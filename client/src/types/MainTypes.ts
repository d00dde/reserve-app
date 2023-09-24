export type TNavLang = {
  logo: string,
  loginLink: string,
  registerLink: string,
  reserveTableLink: string,
  menuLink: string,
  manageTablesLink: string,
  manageUsersLink: string,
  logout: string,
}

export type TLoginLang = {
  title: string,
  phoneTitle: string,
  passwordTitle: string,
  phoneErrorMessage: string,
  passwordErrorMessage: string,
  submitButton: string,
}

export type TRegisterLang = {
  title: string,
  nameTitle: string,
  phoneTitle: string,
  passwordTitle: string,
  nameErrorMessage: string,
  phoneErrorMessage: string,
  passwordErrorMessage: string,
  submitButton: string,
}

export type TCreateTableLang = {
  title: string,
  tableNameTitle: string,
  minPlacesTitle: string,
  maxPlacesTitle: string,
  tableNameErrorMessage: string,
  minPlacesErrorMessage: string,
  maxPlacesErrorMessage: string,
  submitButton: string,
}

export type TMenuCreateLang = {
  addItemButton: string,
  createItemTitle: string,
  nameTitle: string,
  descriptionTitle: string,
  photoUrlTitle: string,
  categoryTitle: string,
  subCategoryTitle: string,
  priceTitle: string,
  unitTitle: string,
  scaleTitle: string,
  isScaledTitle: string,
  nameErrorMessage: string,
  descriptionErrorMessage: string,
  photoUrlErrorMessage: string,
  categoryErrorMessage: string,
  subCategoryErrorMessage: string,
  priceErrorMessage: string,
  unitErrorMessage: string,
  scaleErrorMessage: string,
  submitButton: string,
  editButton: string,
  scaleBaseTitle: string,
  setScaleBaseButton: string,
}

export type TLanguageData = {
  navbar: TNavLang,
  loginForm: TLoginLang,
  registerForm: TRegisterLang,
  createTableForm: TCreateTableLang,
  menuCreate: TMenuCreateLang,
};
