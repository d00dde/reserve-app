import {useCallback, useEffect} from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectUser } from "../../store/userSlice";
import { fetchLogout } from "../../api/userApi";
import { selectMain } from "../../store/mainSlice";
import { Button}  from "../../elements/Button/Button";
import { TNavLang } from "../../types/MainTypes";
import style from './Navbar.module.css'

function adminRoutes(lang: TNavLang) {
  return (
    <>
      {commonRoutes(lang)}
      <li>
        <NavLink to="/manageTables">{lang.manageTablesLink}</NavLink>
      </li>
      <li>
        <NavLink to="/manageUsers">{lang.manageUsersLink}</NavLink>
      </li>
    </>
  )
}

function commonRoutes(lang: TNavLang) {
  return (
    <>
      <li>
        <NavLink to="/menu">{lang.menuLink}</NavLink>
      </li>
      <li>
        <NavLink to="/reserveTable">{lang.reserveTableLink}</NavLink>
      </li>
    </>
  )
}

function defaultRoutes(lang: TNavLang) {
  return (
    <>
      <li>
        <NavLink to="/menu">{lang.menuLink}</NavLink>
      </li>
      <li>
        <NavLink to="/login">{lang.loginLink}</NavLink>
      </li>
      <li>
        <NavLink to="/register">{lang.registerLink}</NavLink>
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
      <div className={style.logo}>
        <Link to="/">{navbar.logo}</Link>
      </div>
      {name ? <div className={style.hello}>{`Hi, ${name}`}</div> : null}
      <ul className={style.links}>
        {links}
        {role !== "none" ? <Button onClick={() => dispatch(fetchLogout())} title={navbar.logout} type="secondary"/> : null}
      </ul>
    </nav>
  );
}
