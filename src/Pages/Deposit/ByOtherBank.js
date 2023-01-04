import { Link } from 'react-router-dom';
import {BsArrowLeft} from 'react-icons/bs';
import InputField from '../../Components/Input/InputField';
import AmountField from '../../Components/Input/AmountField';
import { useState } from 'react';
import Modal from '../../Components/Modal/Modal';
import './ByOtherBank.css';
import TextField from '../../Components/Input/TextField';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';

const ByOtherBank = () => {
    const[sidebar, setSidebar] = useState(false);
    const toggleSidebar = () =>{
      setSidebar((prevState) => !prevState)
    }
    // const [openModal, setOpenModal] = useState(false);
    return ( 
        <div className="byotherbank">
            <Navbar openSidebar={toggleSidebar}/>
            <div className="app-container">
                <Sidebar Sidebar={sidebar} closeSidebar={toggleSidebar}/> 
                <div className="body">
                    <div className="deposit-title">
                        <div className="back">
                            <Link to='/dashboard'>
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
                                            <option>Bank Name</option>
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
                                <div className="form-right">
                                    <div className="inputfield">
                                        <label>Account Holder's Name</label><br></br>
                                        <div className="inputbox2">
                                            <input
                                                type='text'
                                                readOnly
                                                value='Account Name'
                                            >
                                            </input>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-left">
                                    <AmountField
                                        label="Amount"
                                        type="number"
                                        placeholder='Amount'
                                    />
                                </div>
                            
                            </div>
                            <div className="form-2">
                                <TextField
                                    label="Comment"
                                    type="text"
                                    placeholder='Make a Comment'
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

            </div>
        </div>
     );
}
 
export default ByOtherBank;