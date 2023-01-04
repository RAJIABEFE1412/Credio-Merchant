import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import InputField from "../../Components/Input/InputField";
import "./Account.css";
const Account = () => {
    return ( 
        <div className="account">
            <div className="deposit-title">
                <div className="back">
                    <Link to='/dashboard'>
                        <BsArrowLeft />
                    </Link>
                </div>
                <p className="deposit-text">Open Account</p>
            </div>
            <p className="how-save">We need just few information</p>
            <div className="account-body">
                <div className="account-image">
                    <img src="https://source.unsplash.com/random/?people"></img>
                </div>
                <div className="account-body-inner">
                    <form>
                        <div className="form-1">
                            <div className="form-left">
                                <InputField
                                    label="Account holder name"
                                    type="text"
                                    placeholder='Name'
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
                                label="Business address"
                                type="tel"
                                placeholder='Address'
                            />
                        </div>
                        <div className="form-1">
                            <div className="form-left">
                                <InputField
                                    label="Phone number"
                                    type="text"
                                    placeholder='Phone number'
                                />
                            </div>
                            <div className="form-right">
                                <InputField
                                    label="Password"
                                    type="password"
                                    placeholder='Password'
                                />
                            </div>
                        </div>
                        <div className="form-1 form-submit">
                            <div className="form-submit-left">
                                <input
                                    type='submit'
                                    value="Cancel"
                                    className='submit-1'
                                ></input>
                            </div>
                            <div className="form-submit-right">
                                <Link to="/getotp">
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
        </div>
     );
}
 
export default Account;