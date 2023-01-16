import { Link } from 'react-router-dom';
import {BsArrowLeft} from 'react-icons/bs';
import InputField from '../../Components/Input/InputField';
import AmountField from '../../Components/Input/AmountField';
import { useEffect, useState } from 'react';
import { connect } from "react-redux";
import Modal from '../../Components/Modal/Modal';
import './ByOtherBank.css';
import TextField from '../../Components/Input/TextField';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import useFetch from '../../useFetch';
import MoonLoader from "react-spinners/MoonLoader";
import { fetchBank } from '../../Redux/Bank/BankAction';
import { postData } from '../../Redux/BankName/BankNameAction';
import { depositData } from '../../Redux/Deposit/DepositAction';
const ByOtherBank = ({bankData, fetchBank, postData, nameData, depositData, deposit}) => {
    // const {data: bank, ispending, error} = useFetch(`https://credio-api.herokuapp.com/api/v1/agent/action/deposit/nibss`)
    const[sidebar, setSidebar] = useState(false);
    const [spinner, setSpinner]= useState(true);
    const [nibssCode, setnibssCode] =useState(null);
    const [accountNumber, setaccountNumber] = useState("");
    const[amount, setAmount] = useState("");
    const [narration, setnarration] = useState('');
    const debitAccountNumber = '0118462550';
    const saveBeneficiary = false;
    const saveBeneficiaryForUs = false;
    const [accDetails, setAccDetails] = useState([]);
    const [postState, setPostState] = useState({});
    const [depositState, setDepositState] = useState({})
    // const dataurl = 'https://credio-api.herokuapp.com/api/v1/agent/action/deposit/nibss/name';
    // const {data: bankname} = useFetch(dataurl);
    const toggleSidebar = () =>{
      setSidebar((prevState) => !prevState)
    }

    useEffect(()=>{
        fetchBank()
        console.log(bankData)
    }, [])

    const handleBank = (e) =>{
        const value = e.target.value;
        setnibssCode(value)
        console.log(value)
        handleFetchData();
        setPostState({...postState, ...{nibssCode}})
    };
    const handleNumber = (e) => {
        const value = e.target.value;
        console.log(value);
        setaccountNumber(value);
        handleFetchData();
        setPostState({...postState, ...{accountNumber}})
    };
    const handleAmount = (e) => {
        const value = e.target.value;
        console.log(value)
        setAmount(value);
        setDepositState({...depositState, ...{amount}})
    }
    const handleComment =(e)=>{
        const value = e.target.value;
        console.log(value)
        setnarration(value)
        setDepositState({...depositState, ...{narration}, ...{saveBeneficiary}, ...{saveBeneficiaryForUs}, ...{debitAccountNumber}})
    }
    // const nameEnquiryReference = nameData.bankname.bankname.data.sessionId
    // setDepositState({...depositState, ...{nameEnquiryReference}})
    const handleFetchData = () => {
        console.log("this method has been called::: ",nibssCode, accountNumber.toString().length);
        if((nibssCode !== "")&&(accountNumber.toString().length === 10)){
            postData(postState);
        }
    }
    const handleSubmit = (e) => {
            depositData(depositState)
            console.log(deposit)
    }
    // const [openModal, setOpenModal] = useState(false);
   
    // useEffect(()=>{
    //     // this is the issue ( You basically telling the system that un reload (when I set states), check if these two are set then fetch me this data)
      
    // })
    return ( 
        <div className="byotherbank">
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
                        <p className="deposit-text">Other bank Deposit</p>
                    </div>
                    <div className="bycredio-body">
                        <form>
                            <div className="form-1">
                                <div className="form-left select-left">
                                    <label className='select-label'>Bank Name</label><br></br>
                                    <select className='bank-select' value={nibssCode} onBlur={handleBank}> 
                                        <optgroup>
                                            <option>Select Bank</option>
                                        {/* <div className="loader">
                                            {ispending && <div> {
                                                spinner?
                                                <MoonLoader
                                                    color={'#B11226'}
                                                    loading={spinner}
                                                    size={50}
                                                    aria-label="Loading Spinner"
                                                    data-testid="loader"
                                                /> :<div className='loader-2'></div>}
                                            </div>}
                                        </div>
                                        {error && <div>{error}</div>} */}
                                        {bankData && bankData.bank && bankData.bank.map((banks)=>{
                                            return(
                                                <option value={banks.routingKey}>{banks.name}</option>
                                            )
                                        })}  
                                        </optgroup>
                                    </select>
                                </div>
                                <div className="form-right">
                                <div className="inputfield">
                                    <label>Account to Credit</label><br></br>
                                    <div className="inputbox2">
                                        <input
                                            type='text'
                                            placeholder='Account Number'
                                            onBlur={handleNumber}
                                        >
                                        </input>
                                        <span className='place-mobile'>Account Number</span>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="form-1">
                                <div className="form-right">
                                    <div className="inputfield">
                                        <label>Account Holder's Name</label><br></br>
                                        <div className="inputbox2">
                                            <input
                                                type='text'
                                                readOnly
                                                value={nameData && nameData.bankname && nameData.bankname.bankname && nameData.bankname.bankname.data && nameData.bankname.bankname.data.accountName}
                                            >
                                            </input>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-left">
                                    <div className="amountfield">
                                        <label>Amount</label><br></br>
                                        <div className="amountfield-inner">
                                            <div className="inputbox">
                                                <input
                                                    type="number"
                                                    onBlur={handleAmount}
                                                    required
                                                >
                                                </input>
                                                <span className='place-mobile'>Amount</span>
                                            </div>
                                            <div className="ngn"><p>NGN</p></div>
                                        </div>
                                    </div>
                                </div>
                            
                            </div>
                            <div className="form-2">
                                <div className="textfield">
                                    <label>Comment</label><br></br>
                                        <div className="inputbox2">
                                            <textarea
                                            type='text'
                                            placeholder="Make a Comment"
                                            onBlur={handleComment}
                                            >
                                            </textarea>
                                            <span className='place-mobile'>Make a Comment</span>
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
                                    {/* {openModal && <Modal closeModal={setOpenModal}/>} */}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
     );
}

const mapStoreToProps = state => {
    return{
        bankData: state.bank,
        nameData: state,
        deposit: state
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchBank: () => dispatch(fetchBank()),
        postData: (postState)=>{
            dispatch(postData(postState))
        },
        depositData: (depositState)=>{
            dispatch(depositData(depositState))
        }
    }
}
 
export default connect(mapStoreToProps, mapDispatchToProps)(ByOtherBank);