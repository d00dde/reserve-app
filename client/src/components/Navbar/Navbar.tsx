import {useCallback, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectUser } from "../../store/userSlice";
import { fetchLogout } from "../../api/userApi";
import { selectMain } from "../../store/mainSlice";
import { TNavLang } from "../../types/MainTypes";

function adminRoutes(lang: TNavLang) {
  return (
    <>
      <li>
        <Link to="/manageTables">{lang.manageTablesLink}</Link>
      </li>
      <li>
        <Link to="/manageUsers">{lang.manageUsersLink}</Link>
      </li>
    </>
  )
}

function userRoutes(lang: TNavLang) {
  return (
    <>
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

  const links = role === "admin" ? adminRoutes(navbar) : role === "user" ? userRoutes(navbar) : defaultRoutes(navbar);
  return (
    <nav className="navbar">
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