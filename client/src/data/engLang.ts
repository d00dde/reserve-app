import { TLanguageData } from "../types/MainTypes";

export const langData: TLanguageData = {
  navbar: {
    logo: "Resto Magic",
    loginLink: "Login",
    registerLink: "Register",
    reserveTableLink: "Reserve table",
    menuLink: "Menu",
    manageTablesLink: "Manage tables",
    manageUsersLink: "Manage users",
    logout: "Logout",
  },
  loginForm: {
    title: "Set you phone number and password.",
    phoneTitle: "Phone number",
    passwordTitle: "Password",
    phoneErrorMessage: "Must be valid phone number.",
    passwordErrorMessage: "Must be valid password.",
    submitButton: "Log in",
  },
  registerForm: {
    title: "Set you phone number and password.",
    nameTitle: "Your name",
    phoneTitle: "Phone number",
    passwordTitle: "Password",
    nameErrorMessage: "Must be valid user name.",
    phoneErrorMessage: "Must be valid phone number.",
    passwordErrorMessage: "Must be valid password.",
    submitButton: "Register",
  },
  createTableForm: {
    title: "Set create table data",
    tableNameTitle: "Table name",
    minPlacesTitle: "Minimal places",
    maxPlacesTitle: "Maximal places",
    tableNameErrorMessage: "Table name is not valid",
    minPlacesErrorMessage: "Minimal places is not valid",
    maxPlacesErrorMessage: "Maximal places is not valid",
    submitButton: "Create table",
  },
  menu: {
    addItemButton: "ADD",
  }
}
