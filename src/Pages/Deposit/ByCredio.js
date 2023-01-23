import {BsArrowLeft} from 'react-icons/bs';
import InputField from '../../Components/Input/InputField';
import AmountField from '../../Components/Input/AmountField';
import Modal from '../../Components/Modal/Modal';
import { useState, useEffect } from 'react';
import './ByCredio.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import TextField from '../../Components/Input/TextField';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { connect } from "react-redux";
import { fetchBank, postData, reqData } from "../../Redux/Bank/BankAction";
const ByCredio = ({ bankData, fetchBank, postData, nameData, reqData }) => {
    const[sidebar, setSidebar] = useState(false);
    const [accountNumber, setaccountNumber] = useState("");
    const nibssCode = "090286";
    const [amount, setAmount] = useState("");
    const [narration, setnarration] = useState("");
    const history = useNavigate();
    const debitAccountNumber = "0118462550";
    const saveBeneficiary = false;
    const saveBeneficiaryForUs = false;
    const [postState, setPostState] = useState({});
    const toggleSidebar = () =>{
      setSidebar((prevState) => !prevState)
    }
    const [openModal, setOpenModal] = useState(false);
    const handleFetchData = () => {
        console.log(
        "this method has been called::: ",
        nibssCode,
        accountNumber.toString().length
        );
        if (accountNumber.toString().length >= 9) {
        postData(postState);
        }
    };
    useEffect(()=>{
		 setPostState({...postState, ...{ nibssCode }})
	}, [])
    const handleNumber = (e) => {
        const value = e.target.value;
        console.log(value);
        setaccountNumber(value);
        handleFetchData();
        setPostState({ ...postState, ...{ accountNumber } });
    };
    const handleAmount = (e) => {
        const value = e.target.value;
        console.log(value);
        setAmount(value);
    };
    const handleComment = (e) => {
        const value = e.target.value;
        console.log(value);
        setnarration(value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        reqData({
        nameEnquiryReference: nameData.bankname.accountDetails.data.sessionId,
        debitAccountNumber,
        beneficiaryAccountNumber: accountNumber,
        beneficiaryBankCode: nibssCode,
        beneficiaryAccountName: nameData.bankname.accountDetails.data.accountName,
        narration,
        amount,
        saveBeneficiary,
        saveBeneficiaryForUs,
        });
        history(`/previewcredio`);
    };
    return ( 
        <div className="bycredio">
            <Navbar openSidebar={toggleSidebar}/>
            <div className="app-container">
                <Sidebar Sidebar={sidebar} closeSidebar={toggleSidebar}/> 
                <div className="body">
                    <div className="deposit-title">
                        <div className="back">
                            <Link to='/dashboard'>
                                <BsArrowLeft />
                            </Link>
                        </div>
                        <p className="deposit-text">Deposit to crediometer</p>
                    </div>
                    <div className="bycredio-body">
                        <form className='credio-form'>
                            <div className="form-1">
                                <div className="form-left">
                                    <div className="inputfield">
                                        <label>Vault Number</label>
                                        <br></br>
                                        <div className="inputbox2">
                                            <input
                                            type="text"
                                            onBlur={handleNumber}
                                            onChange={handleNumber}
                                            ></input>
                                            <span className="place-mobile">Vault Number</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-right">
                                    <div className="inputfield">
                                        <label>Business Name</label>
                                        <br></br>
                                        <div className="inputbox2">
                                        <input
                                            type="text"
                                            readOnly
                                            value={
                                                nameData &&
                                                nameData.bankname.accountDetails &&
                                                nameData.bankname.accountDetails &&
                                                nameData.bankname.accountDetails.data &&
                                                nameData.bankname.accountDetails.data.accountName
                                            }
                                        ></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-2">
                                <div className="amountfield">
                                    <label>Amount</label>
                                    <br></br>
                                    <div className="amountfield-inner">
                                    <div className="inputbox">
                                        <input
                                        type="number"
                                        required
                                        onBlur={handleAmount}
                                        onChange={handleAmount}
                                        ></input>
                                        <span className="place-mobile">Amount</span>
                                    </div>
                                    <div className="ngn">
                                        <p>NGN</p>
                                    </div>
                                    </div>
                                </div>    
                            </div>
                            <div className="form-2">
                               <div className="textfield">
                                    <label>Comment</label>
                                    <br></br>
                                    <div className="inputbox2">
                                        <textarea
                                        type="text"
                                        placeholder="Make a Comment"
                                        onBlur={handleComment}
                                        onChange={handleComment}
                                        ></textarea>
                                        <span className="place-mobile">Make a Comment</span>
                                    </div>
                                </div>
                            </div>
                            <div className="form-submit">
                                <div className="form-submit-left">
                                    <input
                                        type='submit'
                                        value="Cancel"
                                        className='submit-1'
                                    ></input>
                                </div>
                                <div className="form-submit-right">
                                    <button
                                        type='submit'
                                        value="Continue"
                                        className='submit-2'
                                        onClick={handleSubmit}
                                    >Continue</button>
                                </div>
                            </div>
                        </form>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBank: () => dispatch(fetchBank()),
    postData: (postState) => {
      dispatch(postData(postState));
    },
    reqData: (depositState) => {
      dispatch(reqData(depositState));
    },
  };
};

export default connect(mapStoreToProps, mapDispatchToProps)(ByCredio);