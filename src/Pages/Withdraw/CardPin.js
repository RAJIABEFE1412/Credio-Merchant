import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useCallback } from "react";
import "./CardPin.css";
import PinField from "../../Components/Input/PinField";
import { sendPIN } from "../../Redux/Card/CardScript";
import ModalSaving from "../../Components/Modal/ModalSaving";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";

import { connect } from "react-redux";
const CardPin = ({ sendPin }) => {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState);
  };
  const [openModal, setOpenModal] = useState(false);
  const [pin, setPin] = useState("");
  const atmpin = useRef(null);
  useEffect(() => {
    if (pin.length === 1) {
      atmpin1.current.focus();
    }
  }, [pin.length]);
  const onChangepin1 = (e) => {
    setPin(e.target.value);
  };
  const [pin1, setPin1] = useState("");
  const atmpin1 = useRef(null);
  useEffect(() => {
    if (pin1.length === 1) {
      atmpin2.current.focus();
    }
  }, [pin1.length]);
  const onChangepin2 = (e) => {
    setPin1(e.target.value);
  };
  const [pin2, setPin2] = useState("");
  const atmpin2 = useRef(null);
  useEffect(() => {
    if (pin2.length === 1) {
      atmpin3.current.focus();
    }
  }, [pin2.length]);
  const onChangepin3 = (e) => {
    setPin2(e.target.value);
  };
  const [pin3, setPin3] = useState("");
  const atmpin3 = useRef(null);
  const onChangepin4 = (e) => {
    setPin3(e.target.value);
    handlePin();
  };

  const handlePin = () => {
    // e.preventDefault();
    if (pin && pin1 && pin2 && pin3) {
      // send pin to redux
      sendPIN(`${pin}${pin1}${pin2}${pin3}`);
    }
  };
  return (
    <div className="">
      <p className="enter-pin">Please Enter Your Card Pin</p>
      <div className="field-container">
        <div className="field-1">
          <div className="pinfield">
            <input
              type="text"
              maxlength="1"
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
              maxlength="1"
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
              maxlength="1"
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
              maxlength="1"
              value={pin3}
              onChange={onChangepin4}
              ref={atmpin3}
            ></input>
          </div>
        </div>
      </div>
      <div className="form-submit-right pin-submit withdraw-submit">
        <button
          onClick={() => handlePin()}
          type="button"
          value="Continue"
          className="submit-2"
        >
          Finish
        </button>
        {/* {openModal && <ModalSaving closeModal={setOpenModal} />} */}
      </div>
    </div>
  );
};

const mapStoreToProps = (state) => {
  return {
    cardData: state.card,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendPin: (pin) => {
      console.log("got here ....... . ... ");
      dispatch(sendPIN(pin));
    },
  };
};

export default connect(mapStoreToProps, mapDispatchToProps)(CardPin);
