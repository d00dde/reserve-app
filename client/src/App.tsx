import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import './App.css';
import { Layout } from "./pages/Layout";
import { StartPage } from "./pages/StartPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { fetchRole } from "./api/userApi";
import { useAppDispatch } from "./store/hooks";
import { ManageTablesPage } from "./pages/ManageTablesPage";
import { ManageUsersPage } from "./pages/ManageUsersPage";
import { MenuPage } from "./pages/MenuPage";
import { ReserveTablesPage } from "./pages/ReserveTablesPage";

export function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchRole());
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<StartPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/reserveTable" element={<ReserveTablesPage/>}/>
        <Route path="/manageTables" element={<ManageTablesPage/>}/>
        <Route path="/menu" element={<MenuPage/>}/>
        <Route path="/manageUsers" element={<ManageUsersPage/>}/>
        <Route path="*" element={<StartPage/>}/>
      </Route>
    </Routes>
  );
}
