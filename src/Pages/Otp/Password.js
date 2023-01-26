import passimage from '../../assets/image/amico.png';
import { Link } from 'react-router-dom';
const Password = () => {
    return ( 
        <div className="password">
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
                        <p className='login-header'>Set Password</p>
                        <p className='login-text'>Enter the password you want?</p>
                    </div>
                    <div className="login-form">
                        <div className="forget-image">
                            <img src={passimage}></img>
                        </div>
                        <form>
                            <div className="inputfield">
                                {/* <label>OTP</label><br></br> */}
                                <div className="inputbox2 inputbox-login">
                                    <input
                                        type="password"
                                        placeholder='Enter Password'
                                        required
                                    >
                                    </input>
                                    <span className="place-mobile">Enter Password</span>
                                </div>
                            </div>
                            <div className="inputfield">
                                {/* <label>OTP</label><br></br> */}
                                <div className="inputbox2 inputbox-login">
                                    <input
                                        type="password"
                                        placeholder='Confirm New Password'
                                        required
                                    >
                                    </input>
                                    <span className="place-mobile">Confirm New Password</span>
                                </div>
                            </div>
                            <Link to="/">
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
 
export default Password;