import { TLanguageData } from "../types/MainTypes";

export const langData: TLanguageData = {
  navbar: {
    logo: "LOGO",
    loginLink: "Login",
    registerLink: "Register",
    reserveTableLink: "Reserve table",
    manageTablesLink: "Manage tables",
    manageUsersLink: "Manage users",
  },
  loginForm: {
    title: "Set you phone number and password.",
    phonePlaceholder: "Phone number",
    passwordPlaceholder: "Password",
    phoneErrorMessage: "Must be valid phone number.",
    passwordErrorMessage: "Must be valid password.",
    submitButton: "Log in",
  },
  registerForm: {
    title: "Set you phone number and password.",
    namePlaceholder: "Your name",
    phonePlaceholder: "Phone number",
    passwordPlaceholder: "Password",
    nameErrorMessage: "Must be valid user name.",
    phoneErrorMessage: "Must be valid phone number.",
    passwordErrorMessage: "Must be valid password.",
    submitButton: "Register",
  }
}
