export type TNavLang = {
  logo: string,
  loginLink: string,
  registerLink: string,
  reserveTableLink: string,
  manageTablesLink: string,
  manageUsersLink: string,
}

export type TLoginLang = {
  title: string,
  phonePlaceholder: string,
  passwordPlaceholder: string,
  phoneErrorMessage: string,
  passwordErrorMessage: string,
}

export type TLanguageData = {
  navbar: TNavLang,
  loginForm: TLoginLang,
};
