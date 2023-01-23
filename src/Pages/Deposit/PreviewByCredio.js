import {BsArrowLeft} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { useState, useEffect, useRef } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { fetchBank, postData, reqData } from "../../Redux/Bank/BankAction";
import { depositData } from "../../Redux/Deposit/DepositAction";
import { fetchProfile } from '../../Redux';
import JSEncrypt from 'jsencrypt';
import consts from '../Login/keys/const'
const PreviewByCredio = ({
    bankData,
    fetchBank,
    postData,
    nameData,
    depositData,
    reqData,
    deposit,profileData,fetchProfile
  }) => {
    const [combinedpin, setCombinedpin] = useState('');
    const [pin, setPin] = useState("");
    const atmpin = useRef(null);
    useEffect(()=>{
        fetchProfile()
    }, [])
    useEffect(()=>{
    if(pin.length === 1){
        atmpin1.current.focus();
    }
    }, [pin.length]);
    const onChangepin1 = (e) => {
        const value = e.target.value
        setPin(value)
    }
    const [pin1, setPin1] = useState("");
    const atmpin1 = useRef(null);
    useEffect(()=>{
        if(pin1.length === 1){
            atmpin2.current.focus();
        }
    }, [pin1.length]);
    const onChangepin2 = (e) => {
        const value = e.target.value
        setPin1(value)
    }
    const [pin2, setPin2] = useState("");
    const atmpin2 = useRef(null);
    useEffect(()=>{
        if(pin2.length === 1){
            atmpin3.current.focus();
        }
    }, [pin2.length]);
    const onChangepin3 = (e) => {
        const value = e.target.value
        setPin2(value)
    }
    const [pin3, setPin3] = useState("");
    const atmpin3 = useRef(null);
    const onChangepin4 = (e) => {
        const value = e.target.value
        setPin3(value)
        const pins = `${pin}${pin1}${pin2}${value}`
        console.log(pins)
        var encrypt = new JSEncrypt();
        encrypt.setPublicKey(`${consts.pub_key}`);
        var encrypted = encrypt.encrypt(pins);
        console.log(encrypted)
        setCombinedpin(encrypted);
    }
    const reference = 're3z6182'
    const handleSubmit = (e) => {
        e.preventDefault();
        reqData({
        nameEnquiryReference: nameData.bankname.transferData.nameEnquiryReference,
        debitAccountNumber: nameData.bankname.transferData.debitAccountNumber,
        beneficiaryAccountNumber: nameData.bankname.transferData.beneficiaryAccountNumber,
        beneficiaryBankCode: nameData.bankname.transferData.beneficiaryBankCode,
        beneficiaryAccountName: nameData.bankname.transferData.beneficiaryAccountName,
        narration: nameData.bankname.transferData.narration,
        amount:nameData.bankname.transferData.amount,
        saveBeneficiary: nameData.bankname.transferData.saveBeneficiary,
        saveBeneficiaryForUs:nameData.bankname.transferData.saveBeneficiaryForUs,
        pin:combinedpin,
        paymentReference:reference
        });
        console.log(deposit)
        // setDepositState({...depositstate, ...{deposit}, ...{combinedpin:pin }})
        // console.log(combinedpin)
        // console.log(depositstate)
        depositData(deposit);

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
                                        <p className="receipt-body">
                                            N{nameData.bankname.transferData.amount}
                                        </p>  
                                    </div>
                                </div>
                                <div className="preview-1">
                                    <div className="preview-left">
                                        <p className="receipt-head">Account Number</p>
                                        <p className="receipt-body">{nameData.bankname.transferData.beneficiaryAccountNumber}</p>
                                    </div>
                                    <div className="preview-right">
                                        <p className="receipt-head">Commision</p>
                                        <p className="receipt-body">N10.00</p>
                                    </div>
                                </div>
                                <div className="preview-1">
                                    <div className="preview-left">
                                        <p className="receipt-head">Business Name</p>
                                        <p className="receipt-body"> {nameData.bankname.transferData.beneficiaryAccountName}</p>
                                    </div>
                                    <div className="preview-right">
                                        <p className="receipt-head">Balance</p>
                                        <p className="receipt-body">{profileData && profileData?.profile && profileData?.profile?.message?.profile?.vaults?.accountBalance}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="field-container">
                                <div className="field-1">
                                    <div className="pinfield">
                                        <input
                                            type="text"
                                            maxlength= "1"
                                            
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
                                          
                                            onChange={onChangepin4}
                                            ref={atmpin3}
                                        ></input>
                                    </div>
                                </div>
                            </div>
                            <div className="form-submit-right saving-submit withdraw-submit">
                                    <button
                                        onClick={handleSubmit}
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
 
const mapStoreToProps = (state) => {

    return {
      bankData: state.bankname,
      nameData: state,
      deposit: state.bankname.transferData,
      profileData: state.profile
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
fetchProfile: () => dispatch(fetchProfile()),
      fetchBank: () => dispatch(fetchBank()),
      postData: (postState) => {
        dispatch(postData(postState));
      },
      reqData: (depositState) => {
        dispatch(reqData(depositState));
      },
      depositData: (depositState)=>{
        dispatch(depositData(depositState))
    }
    };
  };

export default connect(mapStoreToProps, mapDispatchToProps)(PreviewByCredio);