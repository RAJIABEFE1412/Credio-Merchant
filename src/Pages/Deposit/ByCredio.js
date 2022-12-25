import {BsArrowLeft} from 'react-icons/bs';
import InputField from '../../Components/Input/InputField';
import AmountField from '../../Components/Input/AmountField';
import Modal from '../../Components/Modal/Modal';
import { useState } from 'react';
import './ByCredio.css';
import { Link } from 'react-router-dom';
import TextField from '../../Components/Input/TextField';
const ByCredio = () => {
    const [openModal, setOpenModal] = useState(false);
    return ( 
        <div className="bycredio">
            <div className="deposit-title">
                <div className="back">
                    <Link to='/'>
                        <BsArrowLeft />
                    </Link>
                </div>
                <p className="deposit-text">Deposit to crediometer</p>
            </div>
            <div className="bycredio-body">
                <form className='credio-form'>
                    <div className="form-1">
                        <div className="form-left">
                            <InputField
                                label="Vault number"
                                type="text"
                                placeholder='Number'
                            />
                        </div>
                        <div className="form-right">
                            <div className="inputfield">
                                <label>Business Name</label><br></br>
                                <div className="inputbox2">
                                    <input
                                        type='text'
                                        readOnly
                                        value='Business Name'
                                    >
                                    </input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-2">
                            <AmountField
                                label="Amount"
                                type="number"
                                placeholder='Amount'
                            />
                    </div>
                    <div className="form-2">
                        <TextField
                            label="Comment"
                            type="text"
                            placeholder='Make a comment'
                        />
                    </div>
                    <div className="form-submit">
                        <div className="form-submit-left">
                            <input
                                type='submit'
                                value="Cancel"
                                className='submit-1'
                            ></input>
                        </div>
                        <div className="form-submit-right">
                            <Link to='/previewcredio'>
                                <button
                                    type='submit'
                                    value="Continue"
                                    className='submit-2'
                                >Continue</button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
            
        </div>
     );
}
 
export default ByCredio;