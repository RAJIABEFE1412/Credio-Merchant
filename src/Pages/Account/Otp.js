import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import PinField from "../../Components/Input/PinField";
import './Otp.css';
const Otp = () => {
    return ( 
        <div className="otp">
            <div className="deposit-title">
                <div className="back">
                    <Link to='/openaccount'>
                        <BsArrowLeft />
                    </Link>
                </div>
                <p className="deposit-text">Open Account</p>
            </div>
            <p className="how-save">Enter 6 Digit code that was sent to <span>+234 9856 746465</span></p>
            <div className="otp-body">
                <div className="otp-body-inner">
                    <div className="field-container">
                        <div className="field-1">
                            <PinField/>
                        </div>
                        <div className="field-1">
                            <PinField/>
                        </div>
                        <div className="field-1">
                            <PinField/>
                        </div>
                        <div className="field-1">
                            <PinField/>
                        </div>
                        <div className="field-1">
                            <PinField/>
                        </div>
                        <div className="field-1">
                            <PinField/>
                        </div>
                    </div>
                    <p className="receive-code">Didn’t receive code?</p>
                    <p className="resend-code">resend code</p>
                    <div className="form-1 form-submit otp-submit">
                        <div className="form-submit-left">
                            <input
                                type='submit'
                                value="Back"
                                className='submit-1'
                            ></input>
                        </div>
                        <div className="form-submit-right">
                            <Link to='/checking'>
                                <button
                                    type='submit'
                                    value="Continue"
                                    className='submit-2'
                                >Proceed</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Otp;