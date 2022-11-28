import { Link } from 'react-router-dom';
import {BsArrowLeft} from 'react-icons/bs';
import InputField from '../../Components/Input/InputField';
import { useState } from 'react';
import Modal from '../../Components/Modal/Modal';
import './ByOtherBank.css';
const ByOtherBank = () => {
    // const [openModal, setOpenModal] = useState(false);
    return ( 
        <div className="byotherbank">
            <div className="deposit-title">
                <div className="back">
                    <Link to='/deposit'>
                        <BsArrowLeft />
                    </Link>
                </div>
                <p className="deposit-text">Other bank Deposit</p>
            </div>
            <div className="bycredio-body">
                <form>
                    <div className="form-1">
                        <div className="form-left select-left">
                            <label className='select-label'>Bank Name</label><br></br>
                            <select
                             className='bank-select'
                            > 
                                <optgroup>
                                    <option>Credio bank</option>
                                    <option>First bank</option>
                                    <option>Sterling bank</option>
                                    <option>Eco bank</option>
                                </optgroup>
                            </select>
                        </div>
                        <div className="form-right">
                            <InputField
                                label="Account to Credit"
                                type="number"
                                placeholder='Account Number'
                            />
                        </div>
                    </div>
                    <div className="form-1">
                        <div className="form-left">
                            <InputField
                                label="Amount"
                                type="number"
                                placeholder='Amount'
                            />
                        </div>
                        <div className="form-right">
                            <InputField
                                label="Account Holder's Name"
                                type="text"
                                placeholder='John'
                            />
                        </div>
                    </div>
                    <div className="form-2">
                        <InputField
                            label="Comment"
                            type="text"
                            placeholder='Make a Comment'
                        />
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
                            <Link to="/preview">
                                <button
                                    type='submit'
                                    value="Continue"
                                    className='submit-2'
                                >Continue</button>
                            </Link>
                            {/* {openModal && <Modal closeModal={setOpenModal}/>} */}
                        </div>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default ByOtherBank;