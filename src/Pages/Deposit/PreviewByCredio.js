import {BsArrowLeft} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
const PreviewByCredio = () => {
    const [pin, setPin] = useState("");
    const atmpin = useRef(null);
    useEffect(()=>{
    if(pin.length === 1){
        atmpin1.current.focus();
    }
    }, [pin.length]);
    const onChangepin1 = (e) => {
        setPin(e.target.value)
    }
    const [pin1, setPin1] = useState("");
    const atmpin1 = useRef(null);
    useEffect(()=>{
        if(pin1.length === 1){
            atmpin2.current.focus();
        }
    }, [pin1.length]);
    const onChangepin2 = (e) => {
        setPin1(e.target.value)
    }
    const [pin2, setPin2] = useState("");
    const atmpin2 = useRef(null);
    useEffect(()=>{
        if(pin2.length === 1){
            atmpin3.current.focus();
        }
    }, [pin2.length]);
    const onChangepin3 = (e) => {
        setPin2(e.target.value)
    }
    const [pin3, setPin3] = useState("");
    const atmpin3 = useRef(null);
    const onChangepin4 = (e) => {
        setPin3(e.target.value)
    }
    return ( 
        <div className="previewbycredio">
            <Navbar/>
            <div className="app-container">
                <Sidebar/> 
                <div className="body">
                    <div className="deposit-title">
                        <div className="back">
                            <Link to='/bycredio'>
                                <BsArrowLeft />
                            </Link>
                        </div>
                        <p className="deposit-text">Enter Transaction Pin</p>
                    </div>
                    <div className="bycredio-body">
                        <div className="preview">
                            <div className="receiver-details">
                                <div className="preview-1 preview-upper">
                                    <div className="preview-left">
                                        <p className="receipt-head">Bank Name</p>
                                        <p className="receipt-body">Crediometer</p>
                                    </div>
                                    <div className="preview-right">
                                        <p className="receipt-head">Amount</p>
                                        <p className="receipt-body">N500.00</p>  
                                    </div>
                                </div>
                                <div className="preview-1">
                                    <div className="preview-left">
                                        <p className="receipt-head">Account Number</p>
                                        <p className="receipt-body">007 532 8615</p>
                                    </div>
                                    <div className="preview-right">
                                        <p className="receipt-head">Commision</p>
                                        <p className="receipt-body">N10.00</p>
                                    </div>
                                </div>
                                <div className="preview-1">
                                    <div className="preview-left">
                                        <p className="receipt-head">Business Name</p>
                                        <p className="receipt-body">ALERIWA PRECIOUS OLUWANIFEMI</p>
                                    </div>
                                    <div className="preview-right">
                                        <p className="receipt-head">Balance</p>
                                        <p className="receipt-body">N50.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="field-container">
                                <div className="field-1">
                                    <div className="pinfield">
                                        <input
                                            type="text"
                                            maxlength= "1"
                                            value={pin}
                                            onChange={onChangepin1}
                                            ref={atmpin}
                                            autoFocus
                                        ></input>
                                    </div>
                                </div>
                                <div className="field-1">
                                    <div className="pinfield">
                                        <input
                                            type="text"
                                            maxlength= "1"
                                            value={pin1}
                                            onChange={onChangepin2}
                                            ref={atmpin1}
                                        ></input>
                                    </div>
                                </div>
                                <div className="field-1">
                                    <div className="pinfield">
                                        <input
                                            type="text"
                                            maxlength= "1"
                                            value={pin2}
                                            onChange={onChangepin3}
                                            ref={atmpin2}
                                        ></input>
                                    </div>
                                </div>
                                <div className="field-1">
                                    <div className="pinfield">
                                        <input
                                            type="text"
                                            maxlength= "1"
                                            value={pin3}
                                            onChange={onChangepin4}
                                            ref={atmpin3}
                                        ></input>
                                    </div>
                                </div>
                            </div>
                            <div className="form-submit-right saving-submit withdraw-submit">
                                    <button
                                        type='submit'
                                        value="Continue"
                                        className='submit-2'
                                    >Finish</button>
                            </div>
                            {/* <div className="form-1 form-submit preview-submit">
                                <div className="form-submit-left">
                                    <input
                                        type='submit'
                                        value="Cancel"
                                        className='submit-1'
                                    ></input>
                                </div>
                                <div className="form-submit-right">
                                        <button
                                            onClick={()=> setOpenModal(true)}
                                            type='submit'
                                            value="Continue"
                                            className='submit-2'
                                        >Continue</button>
                                    {openModal && <Modal closeModal={setOpenModal}/>}
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
 
export default PreviewByCredio;