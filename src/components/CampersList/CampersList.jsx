// import { useSelector } from "react-redux";
// import { getCampers } from "../redux/selectors";
import CamperCard from "../CamperCard/CamperCard.jsx";
import ModalCamper from "../../Modal/Modal.jsx";
import { useState } from "react";
import CamperDetails from "../CamperDetails/CamperDetails.jsx";
//import css from "./CampersList.module.css";
const CampersList = ({ campers, classN }) => {
  //const filteredContacts = useSelector(getCampers);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleOpenModal = (_id) => {
    setIsModalOpen(true);
    setModalData(campers.filter((camper) => camper._id === _id)[0]);
    openModal();
  };
  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <ul className={classN}>
        {campers.map((camper) => (
          <li key={camper._id}>
            <CamperCard camper={camper} handleOpenModal={handleOpenModal} />
          </li>
        ))}
      </ul>
      <ModalCamper isOpen={isModalOpen}>
        <CamperDetails modalData={modalData} closeModal={closeModal} />
      </ModalCamper>
    </>
  );
};
export default CampersList;
