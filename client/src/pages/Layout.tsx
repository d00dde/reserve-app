import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
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
