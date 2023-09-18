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

export type TMenuLang = {
  addItemButton: string,
}

export type TLanguageData = {
  navbar: TNavLang,
  loginForm: TLoginLang,
  registerForm: TRegisterLang,
  createTableForm: TCreateTableLang,
  menu: TMenuLang,
};
