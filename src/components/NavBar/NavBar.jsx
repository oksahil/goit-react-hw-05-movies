import { NavLink } from "react-router-dom";
import css from "./navBar.module.css";

import navItems from "./navItems";

const NavBar = () => {
    const elem = navItems.map(({ id, text, link }) =>
        <li key={id}>
            <NavLink className={css.link} to={link}>{text }</NavLink>
        </li>)
    return (
        <ul className={css.menu}>
            {elem}
       </ul>
   )
}

export default NavBar;