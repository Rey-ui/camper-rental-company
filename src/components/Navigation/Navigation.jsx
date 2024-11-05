//import css from "./ContactsNav.module.css";
import { Link, NavLink } from "react-router-dom";
import sprite from "../../sprite/symbol-defs.svg";
//import { useSelector } from "react-redux";
import clsx from "classnames";
import css from "./Navigation.module.css";
//import { selectUserIsSignedIn } from "../redux/auth/selectors";
const getNavLinkClassNames = ({ isActive }) =>
  clsx(css.NavLink, {
    [css.active]: isActive,
  });
const Navigation = () => {
  //const isSignedIn = useSelector(selectUserIsSignedIn);
  return (
    <div className={css.ContainerNav}>
      {/* <svg className={css.NavSvg} width="24" height="24">
        <use href={`${sprite}#icon-camper`}></use>
      </svg> */}
      <Link className={css.NavSvgButton} to="/">
        <svg className={css.NavSvg} width="24" height="24">
          <use href={`${sprite}#icon-camper`}></use>
        </svg>
      </Link>
      <div className={css.NavContent}>
        <div>
          <NavLink className={getNavLinkClassNames} to="/">
            Home
          </NavLink>
        </div>

        <div>
          <NavLink className={getNavLinkClassNames} to="/catalog">
            Catalog
          </NavLink>
        </div>
        <div>
          <NavLink className={getNavLinkClassNames} to="/favorites">
            Favorites
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
