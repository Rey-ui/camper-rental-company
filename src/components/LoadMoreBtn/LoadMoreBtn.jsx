import { useDispatch } from "react-redux";
import css from "./LoadMoreBtn.module.css";
import { useEffect, useState } from "react";
import { fetchAdvertsThunk } from "../../redux/operations";
const LoadMoreBtn = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };
  useEffect(() => {
    dispatch(fetchAdvertsThunk(page));
  }, [dispatch, page]);

  return (
    <button className={css.LoadMoreBtn} type="button" onClick={handleLoadMore}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
