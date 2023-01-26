import "./CustomModal.css";
import credio from "../../assets/image/credio.png";
const CustomModal = ({ closeModal, Child }) => {
  return (
    <div
      className="modal-background"
      onClick={() => {
        closeModal(false);
      }}
    >
      <div className="custom-modal-container">
        <div className="custom-modal-container-inner">
          <div >{Child}</div>

        </div>
      </div>
    </div>
  );
};

export default CustomModal;
