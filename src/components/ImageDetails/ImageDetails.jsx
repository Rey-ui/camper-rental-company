import css from "./ImageDetails.module.css";

const ImageDetails = ({ selectedImage, closeModall, sprite }) => {
  return (
    <div className={css.ImageDetailsContainer}>
      <button className={css.ImageDetailsBtn} onClick={closeModall}>
        <svg className={css.svgcross} width="32" height="32">
          <use href={`${sprite}#icon-cross`}></use>
        </svg>
      </button>
      <img className={css.Img} src={selectedImage} />
    </div>
  );
};

export default ImageDetails;
