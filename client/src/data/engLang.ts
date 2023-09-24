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
  menuCreate: {
    addItemButton: "ADD",
    createItemTitle: "Add item from menu",
    nameTitle: "Item name",
    descriptionTitle: "Description",
    photoUrlTitle: "Photo URL",
    categoryTitle: "Category",
    subCategoryTitle: "Subcategory",
    priceTitle: "Price",
    unitTitle: "Unit",
    scaleTitle: "Scale",
    isScaledTitle: "Use scale for item",
    nameErrorMessage: "Name is not valid",
    descriptionErrorMessage: "Description is not valid",
    photoUrlErrorMessage: "Photo URL is not valid",
    categoryErrorMessage: "Category name is not valid",
    subCategoryErrorMessage: "Subcategory name is not valid",
    priceErrorMessage: "Price is not valid",
    unitErrorMessage: "Unit is not valid",
    scaleErrorMessage: "Scale is not valid",
    submitButton: "Create",
    editButton: "Update",
    scaleBaseTitle: "Scale base",
    setScaleBaseButton: "Set",
  }
}
