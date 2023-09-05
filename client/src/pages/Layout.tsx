import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";
import { UserMessage } from "../components/ErrorManager/UserMessage";
import { Loader } from "../components/Loader/Loader";

export function Layout() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
      <UserMessage/>
      <Loader/>
    </>
  );
}
