import { useEffect, useState } from "react";
import sprite from "../../sprite/symbol-defs.svg";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites } from "../../redux/favorites/selectors";
import { addFavorite, removeFavorite } from "../../redux/favorites/slice";
import css from "./CamperCard.module.css";

const CamperCard = ({ camper, handleOpenModal }) => {
  const dispatch = useDispatch();
  const { adults, transmission, engine, details } = camper;
  const [isFavorite, setIsFavorite] = useState(false);
  const [SvgFav, setSvgFav] = useState("icon-heart");
  const favorites = useSelector(getFavorites);
  console.log("Favorites: ", favorites);
  const handleToggleFav = () => {
    if (isFavorite) {
      setSvgFav("icon-heart");
      dispatch(removeFavorite(camper._id));
    } else {
      setSvgFav("icon-Vector");
      dispatch(addFavorite(camper));
    }
    setIsFavorite(!isFavorite);
  };
  const updatedFavorites = favorites.some((fav) => fav._id === camper._id)
    ? favorites.filter((fav) => fav._id !== camper._id)
    : [...favorites, camper];

  localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  useEffect(() => {
    const isFav = favorites.some((fav) => fav._id === camper._id);
    setIsFavorite(isFav);
    setSvgFav(isFav ? "icon-Vector" : "icon-heart");
  }, [favorites, camper._id]);
  const camperDetails = [
    {
      label: adults === 1 ? "adult" : "adults",
      value: adults || "N/A",
      iconName: "#icon-Users",
    },
    {
      label: "",
      value: transmission
        ? transmission.charAt(0).toUpperCase() + transmission.slice(1)
        : "N/A",
      iconName: "#icon-Container",
    },
    {
      label: "",
      value: engine ? engine.charAt(0).toUpperCase() + engine.slice(1) : "N/A",
      iconName: "#icon-pump",
    },
    {
      label: "",
      value:
        details && details.kitchen > 0
          ? details.kitchen === 1
            ? "Kitchen"
            : `${details.kitchen} kitchens`
          : "No kitchen",
      iconName: "#icon-cutlery",
    },
    {
      label: details && details.beds === 1 ? "bed" : "beds",
      value: details ? details.beds : "No beds",
      iconName: "#icon-bed",
    },
    {
      label: "",
      value: details && details.airConditioner > 0 ? "AC" : "No AC",
      iconName: "#icon-wind1",
    },
  ];
  return (
    <li className={css.camperCardContainer}>
      <div className={css.camperCardImg}>
        <img src={camper.gallery[0]} alt="camper" />
      </div>
      <div className={css.camperCardContent}>
        <div className={css.camperCardHeaderContainer}>
          <div className={css.camperCardHeader}>
            <h3 className={css.camperCardTitle}>{camper.name}</h3>
            <div className={css.camperCardFavorites}>
              <span className={css.camperCardFavoritesSpan}>
                &#8364;{camper.price.toFixed(2)}
              </span>
              <button
                className={css.camperCardFavoritesButton}
                onClick={handleToggleFav}
              >
                <svg className={css.svgCardHeart} width="24" height="24">
                  <use href={`${sprite}#${SvgFav}`}></use>
                </svg>
              </button>
            </div>
          </div>
          <div className={css.camperCardLoc}>
            <div className={css.camperCardRating}>
              <svg width="24" height="24">
                <use href={`${sprite}#icon-star`}></use>
              </svg>
              <div className={css.camperCardReviews}>
                <span>{camper.rating}</span>
                <div>{`(${camper.reviews.length} Reviews)`}</div>
              </div>
            </div>
            <div className={css.camperCardMap}>
              <svg className={css.svgCardHeart} width="24" height="24">
                <use href={`${sprite}#icon-map-pin`}></use>
              </svg>
              <div>{camper.location}</div>
            </div>
          </div>
        </div>

        <div className={css.camperCardText}>
          <p>{camper.description}</p>
        </div>
        <div className={css.camperCardListContainer}>
          <ul className={css.camperCardList}>
            {camperDetails.map(
              ({ label, value, iconName }) =>
                value && (
                  <li
                    className={css.camperCardItem}
                    key={`${camper._id}-${iconName}`}
                  >
                    <svg className={css.svgCard} width="24" height="24">
                      <use href={`${sprite}${iconName}`}></use>
                    </svg>
                    {value} {label}
                  </li>
                )
            )}
          </ul>
        </div>
        <button
          className={css.camperCardButtonShow}
          onClick={() => handleOpenModal(camper._id)}
        >
          Show more
        </button>
      </div>
    </li>
  );
};

export default CamperCard;
