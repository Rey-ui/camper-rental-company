import sprite from "../../sprite/symbol-defs.svg";
import css from "./CamperReviews.module.css";
import "./Reviews.css";
const CamperReviews = ({ reviews }) => {
  return (
    <ul className={css.ReviewsList}>
      {reviews.map((review, index) => {
        const firstLetter = review.reviewer_name.charAt(0).toUpperCase();
        const rating = review.reviewer_rating;
        return (
          <li className={css.ReviewsItem} key={index}>
            <div className={css.ReviewsItemHeader}>
              <div className={css.ReviewsItemLetter}>{firstLetter}</div>
              <div className={css.ReviewsItemText}>
                <h3 className={css.ReviewsItemTitle}>{review.reviewer_name}</h3>
                <div className={css.ReviewsItemRaiting}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="24" height="24">
                      <use
                        className={i < rating ? "icon-star" : "icon-star-white"}
                        href={`${sprite}#icon-star`}
                      ></use>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className={css.ReviewsItemComment}>{review.comment}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default CamperReviews;
