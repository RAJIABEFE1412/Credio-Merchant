import {BsArrowLeft} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './PreviewOtherBank.css';
import Modal from '../../Components/Modal/Modal';
const PreviewOtherBank = () => {
    const [openModal, setOpenModal] = useState(false);
    return ( 
        <div className="previewotherbank">
            <div className="deposit-title">
                <div className="back">
                    <Link to='/deposit'>
                        <BsArrowLeft />
                    </Link>
                </div>
                <p className="deposit-text">Other bank Deposit</p>
            </div>
            <div className="bycredio-body">
                <div className="preview">
                    <div className="form-1 preview-1">
                        <div className="form-left select-left">
                            <p className="receipt-head">Account holder’s name</p>
                        </div>
                        <div className="form-right  select-left">
                            <p className="receipt-body">Temidayo Olagunju</p>
                        </div>
                    </div>
                    <div className="form-1 preview-1">
                        <div className="form-left select-left">
                            <p className="receipt-head">Account to credit</p>
                        </div>
                        <div className="form-right  select-left">
                            <p className="receipt-body">89348375834</p>
                        </div>
                    </div>
                    <div className="form-1 preview-1">
                        <div className="form-left select-left">
                            <p className="receipt-head">Bank name </p>
                        </div>
                        <div className="form-right  select-left">
                            <p className="receipt-body">Credio bank </p>
                        </div>
                    </div>
                    <div className="form-1 preview-1">
                        <div className="form-left select-left">
                            <p className="receipt-head">Amount</p>
                        </div>
                        <div className="form-right  select-left">
                            <p className="receipt-body">N29,000</p>
                        </div>
                    </div>
                    <div className="form-1 preview-1">
                        <div className="form-left select-left">
                            <p className="receipt-head">Comment</p>
                        </div>
                        <div className="form-right  select-left">
                            <p className="receipt-body">Make your self happy for  the weekend</p>
                        </div>
                    </div>
                    <div className="form-1 form-submit preview-submit">
                        <div className="form-submit-left">
                            <input
                                type='submit'
                                value="Cancle"
                                className='submit-1'
                            ></input>
                        </div>
                        <div className="form-submit-right">
                                <button
                                    onClick={()=> setOpenModal(true)}
                                    type='submit'
                                    value="Continue"
                                    className='submit-2'
                                >Continue</button>
                            {openModal && <Modal closeModal={setOpenModal}/>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default PreviewOtherBank;