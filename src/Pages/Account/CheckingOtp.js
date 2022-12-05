import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { useState, useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import './CheckingOtp.css';
const CheckingOtp = () => {
    const [spinner, setSpinner]= useState(false)
    useEffect(()=>{
        setSpinner(true)
        setTimeout(()=>{
            setSpinner(false)
        }, 5000)
    },[])
    return ( 
        <div className="checkingotp">
            <div className="deposit-title">
                <div className="back">
                    <Link to='/getotp'>
                        <BsArrowLeft />
                    </Link>
                </div>
            </div>
            <div className="checkingotp-body">
            {
                spinner?
                <ClipLoader
                    color={'#B11226'}
                    loading={spinner}
                    size={80}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                /> : 
                <Link to="/accountdetails" className="otp-link">
                    <div className="modal-container success-container">
                        <div className="modal-container-inner">
                            <div className="successful-icon">
                                <FaCheck/>
                            </div>
                            <p className="successful-word successful-otp">Action Completed</p>
                        </div>
                    </div>
                </Link>
            }
            </div>
        </div>
     );
}
 
export default CheckingOtp;