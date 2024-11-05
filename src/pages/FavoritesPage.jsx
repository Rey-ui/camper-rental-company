import { useSelector } from "react-redux";
import CampersList from "../components/CampersList/CampersList";
import { getFavorites } from "../redux/favorites/selectors";
import { selectError, selectIsLoading } from "../redux/selectors";
import { Link } from "react-router-dom";
import { Audio } from "react-loader-spinner";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import css from "./FavoritesPage.module.css";
import logo from "../assets/img/CamperForFavorite.jpg";
const FavoritesPage = () => {
  const favorites = useSelector(getFavorites);
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  return (
    <div className={css.favoritesWrapper}>
      {isError && <ErrorMessage />}
      {isLoading && (
        <Audio
          height="80"
          width="80"
          radius="9"
          position="absolute"
          color="#d84343"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      )}

      <Link className={css.favoritesbutton} to="/catalog">
        Back to Catalog
      </Link>

      {favorites.length === 0 && (
        <div className={css.favoritesAltContainer}>
          <img src={logo} alt="camper-logo" />
          <p className={css.favoritesText}>
            You haven't chosen the campers you like yet
          </p>
        </div>
      )}
      <CampersList classN={css.favoritesCampersList} campers={favorites} />
    </div>
  );
};

export default FavoritesPage;
