import {FaCheck} from 'react-icons/fa';
import './ModalSaving.css';
const ModalSaving = ({closeModal}) => {
    return ( 
        <div className="modal-background" onClick={() => {closeModal(false)}}>
            <div className="modal-container">
                <div className="modal-container-inner">
                    <div className="successful-icon">
                        <FaCheck/>
                    </div>
                    <p className="successful-word">Action Completed</p>
                </div>
            </div>
        </div>
    );
}
 
export default ModalSaving;