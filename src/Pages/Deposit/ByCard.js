import {BsArrowLeft} from 'react-icons/bs';
import InputField from '../../Components/Input/InputField';
import AmountField from '../../Components/Input/AmountField';
import Modal from '../../Components/Modal/Modal';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const ByCard = () => {
    const [openModal, setOpenModal] = useState(false);
    return ( 
        <div className="bycard">
            <div className="deposit-title">
                <div className="back">
                    <Link to='/deposit'>
                        <BsArrowLeft />
                    </Link>
                </div>
                <p className="deposit-text">Card Number Deposit</p>
            </div>
            <div className="bycredio-body">
                <form>
                    <div className="form-1">
                        <div className="form-left">
                            <InputField
                                label="Card number"
                                type="text"
                                placeholder='8967834'
                            />
                        </div>
                        <div className="form-right">
                            <InputField
                                label="card holder’s name"
                                type="text"
                                placeholder='John'
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
 
export default ByCard;