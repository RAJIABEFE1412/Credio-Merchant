import './Login.css';
import {connect, useDispatch} from 'react-redux'
import { LoginAuthAction } from '../../Redux/Login/LoginAction';
// import { loginuser } from '../../Redux/Login/LoginAction';
import { Link } from 'react-router-dom';
import JSEncrypt from 'jsencrypt';
import Select from "react-select";
import { useState, useEffect,} from 'react';
import countryList from "../../Components/countries.json";
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faSpinner, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import VisibilityIcon from '@mui/icons-material/Visibility';
import consts from "../Login/keys/const";
import { FaEye,FaEyeSlash } from 'react-icons/fa';
const Login = (props) => {
    const {login} = props
    let newDate = new Date();
    let year = newDate.getFullYear();
    const [country, setCountry] = useState({
      "label": "Nigeria",
      "value": "+234",
      "code": "NG"
    });
    const [number, setNumber] = useState(null);
    const [password, setPassword] = useState(null);
    const [data, setData] = useState([]);
    const [errorState, setError] = useState([false, ""]);
    const [loading, setLoading] = useState(false);
    const options = useMemo(() => countryList, []);
    const history = useNavigate();
    const [type, setType] = useState('password');
    const [icon, setIcon] =useState(faEye)
    const [loginState, setLoginState] = useState({});
    const [errorHandler, setErrorHandler] = useState({
        hasError: false,
        message: "",
    });
    const handleCountry = (value) => {
        console.log(value);
        setCountry(value);
      };
    const phone = `${country["value"]}${number}`
    const handleNumber = (e) => {
        const value = e.target.value;
        console.log(value);
        setNumber(value);
        const phoneNumber = `${country["value"]}${number}`
        setLoginState({ ...loginState, ...{phoneNumber} });
    };
      const handlePassword = (e) => {
        // console.log(process.env.REACT_APP_PUB_KEY);
        const value = e.target.value;
        var encrypt = new JSEncrypt();
        encrypt.setPublicKey(`${consts.pub_key}`);
        var encrypted = encrypt.encrypt(value);
    
        console.log(`encrypted   - ${encrypted}`);
        setPassword(encrypted);
        setLoginState({ ...loginState, ...{ password } });
    };

    // const dispatch = useDispatch();
    const handleSignUp = async (e) => {
        e.preventDefault();
        
        try{
       await login(loginState, ()=>{ 
        console.log("now go to dashboard..");
       history(`/dashboard`);}, setErrorHandler);
        //;
        console.log(loginState)
        }catch(e){
            console.log("Something went wrong ??? ",e);
        }
        //for redux
        // useEffect(()=>{
        //     loginuser()
        // }, [])
        //end redux
        //post the login creds
        // e.preventDefault();
        // try {
        //   console.log(`${country["value"]}${number}`);
    
        //   setLoading(true);
        //   setError([false, ""]);
        //   const raw = {
        //     phoneNumber: `${country["value"]}${number}`,
        //     password: password,
        //   };
        //   console.log(`${raw}`);
        //   const requestOptions = {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(raw),
        //     redirect: "follow",
        //   };
    
        //   let response = await fetch(
        //     `https://credio-api.herokuapp.com/api/v1/auth/login`,
        //     requestOptions
        //   );
    
        //   if (response.status === 200) {
        //     setData([country, number, password]);
        //     let message = await response.json();
        //     console.log(message);
        //     sessionStorage.setItem("tokenManager", JSON.stringify(message));
        //     console.log(`ehn you save ??  --- ${sessionStorage.getItem("tokenManager")}`);
        //     history(`/dashboard`);
        //   } else {
        //     setLoading(false);
        //     let message = await response.json();
        //     console.log(message);
        //     setError([true, message['message'] || "Something went wrong"]);
    
        //   }
    
        // } catch (e) {
        //   setLoading(false);
        //   setError([true, e.message || "Something went wrong"]);
        // }
    
        // setData([country, number, password]);
        // console.log(data);
        // history.push(`/dashboard`);
    };
    const vissibleToggle=()=>{
        if(type==='password'){
            setIcon(faEye);
            setType('text');
        }
        else{
            setIcon(faEyeSlash);
            setType('password');
        }
    }
    return ( 
        <div className="login">
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
                        <p className='login-header'>Login</p>
                        <p className='login-text'>Please enter phone number and password to continue</p>
                    </div>
                    {(errorState[0]) ?
                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                            {errorState[1]}

                        </div> : <div></div>
                    }
                    <div className="login-form">
                        <form onSubmit={handleSignUp}>
                        <Select
                            className="mb-4"
                            options={options}
                            value={country}
                            onChange={handleCountry}
                        />{" "}
                            <div className="inputfield">
                                <label>Phone Number</label><br></br>
                                <div className="inputbox2">
                                    <input
                                        type="tel"
                                        placeholder='0903 4344 5532'
                                        name="email"
                                        maxLength="10"
                                        onChange={handleNumber}
                                        onBlur={handleNumber}
                                    >
                                    </input>
                                    <span className='place-mobile'>0903 4344 5532</span>
                                </div>
                            </div>
                            <div className="inputfield">
                                <label>Password</label><br></br>
                                <div className="inputbox2">
                                    <input
                                        type={type}
                                        placeholder='***********'
                                        name="password"
                                        onChange={handlePassword}
                                        onBlur={handlePassword}
                                    >
                                    </input>
                                    <span className='place-mobile'>***********</span>
                                    <span className="psw-visible"><FontAwesomeIcon icon={icon} onClick={vissibleToggle}/></span>
                                </div>
                            </div>
                            <div className="forget">
                                <div className="forget-password">
                                    <Link to='/ForgetPassword'>
                                        <p>Forget password ?</p>
                                    </Link>
                                </div>
                            </div>
                            <div className="submit">
                                <button 
                                type="submit"
                                name="submit"
                                value="Login"
                                onClick={handleSignUp}
                                >
                                    {loading ? (
                                    <FontAwesomeIcon
                                        className="spinner"
                                        icon={faSpinner}
                                    ></FontAwesomeIcon>
                                    ) : (
                                    <span>Login</span>
                                    )}
                                </button>
                            </div>
                            <div className="account">
                                <p className="signin">Don’t have an account yet ? <Link to='/signup'><span>Sign up</span></Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return{
        token: state,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        login: (loginState, history, setErrorHandler) => {
            dispatch(LoginAuthAction(loginState, history, setErrorHandler));
        },
    }
}

 
export default connect(mapStateToProps, mapDispatchToProps)(Login);