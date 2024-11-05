import Modal from "react-modal";
import css from "./Modal.module.css";
// import Iconsvg from '../components/Icon/Icon';

Modal.setAppElement("#root");
const customStyles = {
  overlay: {
    backgroundColor: "rgba(17, 18, 19, 0.4)", // Пример изменения цвета фона оверлея
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none", // Пример изменения рамки модального окна
    // background: "#fff", // Фон модального окна
    // overflow: "auto",
    //margin: "40px 229px",
    // WebkitOverflowScrolling: "touch",
    //borderRadius: "20px",
    // outline: "none",
    width: "80%", // Задаем ширину 80% от экрана
    height: "100%",
    padding: "40px 0 40px 0",
    overflow: "none",
    //padding: "0", // Отступы внутри модального окна
  },
};
const ModalCamper = ({ children, isOpen, closeModal }) => {
  return (
    <Modal
      className={css.modal}
      style={customStyles}
      isOpen={isOpen}
      onRequestClose={closeModal}
    >
      {children}
    </Modal>
  );
};
export default ModalCamper;
