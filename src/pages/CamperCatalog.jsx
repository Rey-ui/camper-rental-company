import { useDispatch, useSelector } from "react-redux";
import CampersList from "../components/CampersList/CampersList";
import LoadMoreBtn from "../components/LoadMoreBtn/LoadMoreBtn";
import {
  selectFilteredCampers,
  getHasMore,
  selectError,
  selectIsLoading,
} from "../redux/selectors";
import CampersFilter from "../components/CampersFilter/CampersFilter";
import { useEffect } from "react";
import { setHasMore } from "../redux/slice";
import css from "./CamperCatalog.module.css";
import { Audio } from "react-loader-spinner";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import logo from "../assets/img/NO-RVS.png";

const CamperCatalog = () => {
  const dispatch = useDispatch();
  const hasMore = useSelector(getHasMore);
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const filteredContacts = useSelector(selectFilteredCampers);

  useEffect(() => {
    if (filteredContacts.length < 4) {
      dispatch(setHasMore(false));
    }
  }, [filteredContacts, dispatch]);
  console.log(filteredContacts.length);
  return (
    <div className={css.catalogWrapper}>
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
      <CampersFilter />
      <div className={css.catalogContent}>
        {filteredContacts.length === 0 && (
          <div className={css.catalogAltContainer}>
            <img src={logo} alt="camper-logo" />
            <p className={css.catalogText}>
              Sorry, we couldn't find a camper with these parameters.
            </p>
          </div>
        )}
        <CampersList
          classN={css.catalogCampersList}
          campers={filteredContacts}
        />
        {hasMore && <LoadMoreBtn />}
      </div>
    </div>
  );
};

export default CamperCatalog;
