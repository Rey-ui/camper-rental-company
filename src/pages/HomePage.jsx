import { Link } from "react-router-dom";
import logo from "../assets/img/Ranger-AR-logo-app.png";
import sprite from "../sprite/symbol-defs.svg";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.HomeWrapper}>
      <div className={css.ContainerHome}>
        <div className={css.HomeImage}>
          <img src={logo} alt="camper-logo" width="450" height="450" />
        </div>
        <div className={css.HomeContent}>
          <h1 className={css.HomeTitle}>
            Welcome to <b>Wander Camp</b>
          </h1>
          <p className={css.HomeText}>
            We are pleased to welcome you to our platform, where dreams of free
            and exciting travel become reality. If you dream of going on an
            unforgettable adventure, exploring picturesque landscapes and
            enjoying comfort along the way, our campers are the perfect choice
            for you. At <b>Wander Camp</b>, we offer a wide range of modern and
            fully equipped campers for rent. Our vehicles are equipped with
            everything you need for a comfortable stay, including sleeping
            places, kitchen facilities, showers and many other amenities to make
            your trip as comfortable and safe as possible.
          </p>

          <Link className={css.HomeButton} to="/catalog">
            <span>View catalog</span>
            <svg width="24" height="24">
              <use href={`${sprite}#icon-long-arrow-right`}></use>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
