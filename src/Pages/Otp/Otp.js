import { Link } from "react-router-dom";
import './Otp.css'
import otpimage from '../../assets/image/Group 692.png'
const Otp = () => {
    return (
        <div className="otp">
            <div className="login-left">
                <p className='login-logo'>Credio Merchant</p>
                <div className="group-lower">
                    <div className="group-lower-inner">
                        <div className="group-outer">
                            <div className="group">
                                <p>Group saving and thrift On the go!</p>
                            </div>
                        </div>
                        <div className="lorem-outer">
                            <p className='lorem'>Lörem ipsum påde sanas prelig fåvaning. Byter dol kovis. Presade fuktig. Odat trev samt vassa. Hyvis prenydarat, bigen </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="login-right">
                <div className="login-form-section-inner">
                    <div className="welcome">
                        <p className='login-header'>Enter OTP</p>
                        <p className='login-text'>A 4-Digit code whas been sent to your number</p>
                    </div>
                    <div className="login-form">
                        <div className="forget-image">
                            <img src={otpimage}></img>
                        </div>
                        <form>
                            <div className="inputfield">
                                {/* <label>OTP</label><br></br> */}
                                <div className="inputbox2 inputbox-login">
                                    <input
                                        type="tel"
                                        placeholder='Enter OTP'
                                        required
                                    >
                                    </input>
                                    <span className="place-mobile">Enter OTP</span>
                                </div>
                            </div>
                            <Link to="/password">
                                <div className="submit submit-login">
                                    <input 
                                    type="submit"
                                    name="submit"
                                    value="Submit"
                                    ></input>
                                </div>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Otp;