import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
import { ErrorManager } from "../components/ErrorManager/ErrorManager";
import { Loader } from "../components/Loader/Loader";

export function Layout() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
      <ErrorManager/>
      <Loader/>
    </>
  );
}
