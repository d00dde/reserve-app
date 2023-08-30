import {useCallback, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectUser } from "../../store/userSlice";
import { fetchLogout } from "../../api/userApi";
import { selectMain } from "../../store/mainSlice";
import { TNavLang } from "../../types/MainTypes";
import style from './Navbar.module.css'

function adminRoutes(lang: TNavLang) {
  return (
    <>
      {commonRoutes(lang)}
      <li>
        <Link to="/manageTables">{lang.manageTablesLink}</Link>
      </li>
      <li>
        <Link to="/manageUsers">{lang.manageUsersLink}</Link>
      </li>
    </>
  )
}

function commonRoutes(lang: TNavLang) {
  return (
    <>
      <li>
        <Link to="/menu">{lang.menuLink}</Link>
      </li>
      <li>
        <Link to="/reserveTable">{lang.reserveTableLink}</Link>
      </li>
    </>
  )
}

function defaultRoutes(lang: TNavLang) {
  return (
    <>
      <li>
        <Link to="/menu">{lang.menuLink}</Link>
      </li>
      <li>
        <Link to="/login">{lang.loginLink}</Link>
      </li>
      <li>
        <Link to="/register">{lang.registerLink}</Link>
      </li>
    </>
  )
}


export function Navbar() {
  const { userData: { role, name }} = useAppSelector(selectUser);
  const { languageData: { navbar } } = useAppSelector(selectMain);
  const dispatch = useAppDispatch();
  const navigate = useCallback(useNavigate(), []);
  useEffect(() => {
    if (role === "admin") {
      navigate("/manageTables");
    }
    else if (role === "user") {
      navigate("/reserveTable");
    }
    else {
      navigate("/");
    }
  }, [role, navigate]);

  const links = role === "admin" ? adminRoutes(navbar) : role === "user" ? commonRoutes(navbar) : defaultRoutes(navbar);
  return (
    <nav className={style.navbar}>
      <div className="logo">
        <Link to="/">{navbar.logo}</Link>
      </div>
      {name ? <div>{`Hi, ${name}`}</div> : null}
      <ul className="links">
        {links}
        {role !== "none" ? <button onClick={() => dispatch(fetchLogout())}>Logout</button> : null}
      </ul>
    </nav>
  );
}
