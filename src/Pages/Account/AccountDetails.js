import { Link } from "react-router-dom";
import {BsArrowLeft} from 'react-icons/bs';
import InputField from "../../Components/Input/InputField";
import "./AccountDetails.css";
const AccountDetails = () => {
    return ( 
        <div className="accountdetails">
            <div className="deposit-title">
                <div className="back">
                    <Link to='/openaccount'>
                        <BsArrowLeft />
                    </Link>
                </div>
                <p className="deposit-text">Account Details</p>
            </div>
            <div className="account-details-container">
                <div className="account-details-outer">
                    <p className="how-save here-details">here is your account details</p>
                    <div className="accountdetails-body">
                        <form>
                            <div className="form-2">
                                <InputField
                                    label="Account Name"
                                    type="text"
                                    placeholder='Jackson'
                                />
                            </div>
                            <div className="form-2">
                                <InputField
                                    label="Account Number"
                                    type="number"
                                    placeholder='84594757786'
                                />
                            </div>
                            <div className="form-2">
                                <InputField
                                    label="Phone Number"
                                    type="number"
                                    placeholder='08964645564'
                                />
                            </div>
                            <div className="form-submit-right saving-submit">
                                        <button
                                            type='submit'
                                            value="Continue"
                                            className='submit-2'
                                        >View Profile</button>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default AccountDetails;