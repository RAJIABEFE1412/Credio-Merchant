import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import './CardPin.css'
import PinField from "../../Components/Input/PinField";
import { useState } from "react";
import ModalSaving from "../../Components/Modal/ModalSaving";
const CardPin = () => {
    const [openModal, setOpenModal] = useState(false);
    return ( 
        <div className="cardpin">
            <div className="deposit-title">
                <div className="back">
                    <Link to='/withdraw'>
                        <BsArrowLeft/>
                    </Link>
                </div>
                <p className="deposit-text">Card Pin</p>
            </div>
            <div className="cardpin-body">
                <div className="cardpin-body-inner">
                    <p className="enter-pin">Please Enter Your Card Pin</p>
                    <div className="field-container">
                        <div className="field-1">
                            <PinField />
                        </div>
                        <div className="field-1">
                            <PinField/>
                        </div>
                        <div className="field-1">
                            <PinField />
                        </div>
                        <div className="field-1">
                            <PinField />
                        </div>
                    </div>
                    <div className="form-submit-right saving-submit withdraw-submit">
                            <button
                                onClick={()=> setOpenModal(true)}
                                type='submit'
                                value="Continue"
                                className='submit-2'
                            >Finish</button>
                            {openModal && <ModalSaving closeModal={setOpenModal}/>}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default CardPin;