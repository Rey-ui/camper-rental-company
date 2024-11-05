import { useState } from "react";
import sprite from "../../sprite/symbol-defs.svg";
import CamperFeatures from "../CamperFeatures/CamperFeatures";
import CamperReviews from "../CamperReviews/CamperReviews";
import css from "./CamperDetails.module.css";

import BookCamperForm from "../BookCAmperForm/BookCamperForm";
import ModalCamper from "../../Modal/Modal";
import ImageDetails from "../ImageDetails/ImageDetails";
const CamperDetails = ({ modalData, closeModal }) => {
  const [activeTab, setActiveTab] = useState("Features");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const closeModall = () => setIsModalOpen(false);
  const handleOpenModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);

    openModal();
  };
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className={css.wrapperModal}>
      <div className={css.buttonWrapperClose}>
        <button onClick={closeModal}>
          <svg className={css.svgCardHeart} width="32" height="32">
            <use href={`${sprite}#icon-cross`}></use>
          </svg>
        </button>
      </div>
      <div className={css.wrapperModalContent}>
        <div className={css.wrapperModalContentHeader}>
          <h3 className={css.wrapperModalContentTitle}> {modalData.name}</h3>
          <div className={css.wrapperModalContentText}>
            <div className={css.wrapperModalContentContainer}>
              <div className={css.wrapperModalRatingContainer}>
                <svg width="24" height="24">
                  <use href={`${sprite}#icon-star`}></use>
                </svg>
                <div className={css.camperCardReviews}>
                  <span>{modalData.rating}</span>
                  <div>{`(${modalData.reviews.length} Reviews)`}</div>
                </div>
              </div>
              <div className={css.camperCardMap}>
                <svg className={css.svgCardMap} width="24" height="24">
                  <use href={`${sprite}#icon-map-pin`}></use>
                </svg>
                <div>{modalData.location}</div>
              </div>
            </div>
            <div className={css.camperCardPrice}>
              &#8364;{modalData.price.toFixed(2)}
            </div>
          </div>
        </div>
        <div className={css.modalInfo}>
          <div className={css.modalDescAndImageContainer}>
            <div className={css.modalImageContainer}>
              {modalData.gallery.map((image, index) => (
                <button
                  className={css.modalImageBtn}
                  key={index}
                  onClick={() => handleOpenModal(image)}
                >
                  <img className={css.modalImageImg} src={image} />
                </button>
              ))}
            </div>
            <div className={css.modalDescription}>{modalData.description}</div>
          </div>

          <div className={css.modalButtons}>
            <div className={css.modalButtonsContainer}>
              <button
                type="button"
                onClick={() => handleTabChange("Features")}
                className={
                  activeTab === "Features" ? css.activeTab : css.buttonAddInfo
                }
              >
                Features
              </button>
              <button
                type="button"
                onClick={() => handleTabChange("Reviews")}
                className={
                  activeTab === "Reviews" ? css.activeTab : css.buttonAddInfo
                }
              >
                Reviews
              </button>
            </div>
            <div className={css.modalButtonsLine}></div>
          </div>
          <div className={css.modalDetailsContainer}>
            <div className={""}>
              <div
                className={
                  activeTab === "Features" ? css.activeContainer : css.hidden
                }
              >
                <CamperFeatures camper={modalData} />
              </div>
              <div
                className={
                  activeTab === "Reviews" ? css.activeContainer : css.hidden
                }
              >
                <CamperReviews reviews={modalData.reviews} />
              </div>
            </div>
            <BookCamperForm />
          </div>
        </div>
      </div>
      <ModalCamper isOpen={isModalOpen}>
        <ImageDetails
          closeModall={closeModall}
          selectedImage={selectedImage}
          sprite={sprite}
        />
      </ModalCamper>
    </div>
  );
};

export default CamperDetails;
