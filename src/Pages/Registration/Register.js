import { Link } from "react-router-dom";
const Register = () => {
    return ( 
        <div className="register">
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
                        <p className='login-header'>Sign up</p>
                        <p className='login-text'>Please enter your phone number</p>
                    </div>
                    <div className="login-form">
                        <form>
                            <div className="inputfield">
                                <label>Phone Number</label><br></br>
                                <div className="inputbox2">
                                    <input
                                        type="tel"
                                        placeholder='0903 4344 5532'
                                    >
                                    </input>
                                    <span>0903 4344 5532</span>
                                </div>
                            </div>
                            <Link to="/dashboard">
                                <div className="submit">
                                    <input 
                                    type="submit"
                                    name="submit"
                                    value="Login"
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
 
export default Register;