import {BsArrowLeft} from 'react-icons/bs';
import InputField from '../../Components/Input/InputField';
import AmountField from '../../Components/Input/AmountField';
import Modal from '../../Components/Modal/Modal';
import { useState } from 'react';
import './ByCredio.css';
import { Link } from 'react-router-dom';
const ByCredio = () => {
    const [openModal, setOpenModal] = useState(false);
    return ( 
        <div className="bycredio">
            <div className="deposit-title">
                <div className="back">
                    <Link to='/deposit'>
                        <BsArrowLeft />
                    </Link>
                </div>
                <p className="deposit-text">Deposit to crediometer</p>
            </div>
            <div className="bycredio-body">
                <form>
                    <div className="form-1">
                        <div className="form-left">
                            <InputField
                                label="Vault number"
                                type="text"
                                placeholder='Number'
                            />
                        </div>
                        <div className="form-right">
                            <InputField
                                label="Business name"
                                type="text"
                                placeholder='Business name'
                            />
                        </div>
                    </div>
                    <div className="form-2">
                        <InputField
                            label="Account to credit"
                            type="tel"
                            placeholder='Account number'
                        />
                    </div>
                    <div className="form-1">
                        <div className="form-left">
                            <AmountField
                                label="Amount"
                                type="number"
                                placeholder='Amount'
                            />
                        </div>
                        <div className="form-right">
                            <InputField
                                label="Comment"
                                type="text"
                                placeholder='Make a comment'
                            />
                        </div>
                    </div>
                    <div className="form-1 form-submit">
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
                </form>
            </div>
            
        </div>
     );
}
 
export default ByCredio;