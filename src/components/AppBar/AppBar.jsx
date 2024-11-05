import css from "./AppBar.module.css";
import Navigation from "../Navigation/Navigation";

const AppBar = ({ children }) => {
  return (
    <div className={css.AppBar}>
      <Navigation />
    </div>
  );
};
export default AppBar;
