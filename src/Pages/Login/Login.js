import './Login.css';
import { Link } from 'react-router-dom';
import JSEncrypt from 'jsencrypt';
import Select from "react-select";
import { useState, useEffect,} from 'react';
import countryList from "../../Components/countries.json";
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import consts from "../Login/keys/const";
const Login = () => {
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
    const handleCountry = (value) => {
        console.log(value);
        setCountry(value);
      };
    const handleNumber = (e) => {
        const value = e.target.value;
        console.log(value);
        setNumber(value);
    };
      const handlePassword = (e) => {
        // console.log(process.env.REACT_APP_PUB_KEY);
        const value = e.target.value;
        var encrypt = new JSEncrypt();
        encrypt.setPublicKey(`${consts.pub_key}`);
        var encrypted = encrypt.encrypt(value);
    
        console.log(`encrypted   - ${encrypted}`);
        setPassword(encrypted);
    };
    const handleSignUp = async (e) => {
        //post the login creds
        e.preventDefault();
        try {
          console.log(`${country["value"]}${number}`);
    
          setLoading(true);
          setError([false, ""]);
          const raw = {
            phoneNumber: `${country["value"]}${number}`,
            password: password,
          };
          console.log(`${raw}`);
          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(raw),
            redirect: "follow",
          };
    
          let response = await fetch(
            `https://credio-api.herokuapp.com/api/v1/auth/login`,
            requestOptions
          );
    
          if (response.status === 200) {
            setData([country, number, password]);
            let message = await response.json();
            console.log(message);
            sessionStorage.setItem("tokenManager", JSON.stringify(message));
            console.log(`ehn you save ??  --- ${sessionStorage.getItem("tokenManager")}`);
            history(`/dashboard`);
          } else {
            setLoading(false);
            let message = await response.json();
            console.log(message);
            setError([true, message['message'] || "Something went wrong"]);
    
          }
    
        } catch (e) {
          setLoading(false);
          setError([true, e.message || "Something went wrong"]);
        }
    
        // setData([country, number, password]);
        // console.log(data);
        // history.push(`/dashboard`);
    };
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
                                    >
                                    </input>
                                    <span>0903 4344 5532</span>
                                </div>
                            </div>
                            <div className="inputfield">
                                <label>Password</label><br></br>
                                <div className="inputbox2">
                                    <input
                                        type='password'
                                        placeholder='***********'
                                        name="password"
                                        onChange={handlePassword}
                                    >
                                    </input>
                                    <span>***********</span>
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
                                <input 
                                type="submit"
                                name="submit"
                                value="Login"
                                ></input>
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
 
export default Login;