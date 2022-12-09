import { Link } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useCallback } from 'react';
import './CardPin.css'
import PinField from "../../Components/Input/PinField";
import { useState } from "react";
import ModalSaving from "../../Components/Modal/ModalSaving";
const CardPin = () => {
    const [openModal, setOpenModal] = useState(false);
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
        <div className="cardpin">
            <div className="deposit-title">
                <div className="back">
                    <Link to='/withdraw'>
                        <BsArrowLeft/>
                    </Link>
                </div>
                <p className="deposit-text">Card Pin</p>
            </div>
            <div className="cardpin-body">
                <div className="cardpin-body-inner">
                    <p className="enter-pin">Please Enter Your Card Pin</p>
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
                                onClick={()=> setOpenModal(true)}
                                type='submit'
                                value="Continue"
                                className='submit-2'
                            >Finish</button>
                            {openModal && <ModalSaving closeModal={setOpenModal}/>}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default CardPin;