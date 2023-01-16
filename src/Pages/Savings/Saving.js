import { Link } from "react-router-dom";
import {BsArrowLeft} from 'react-icons/bs';
import InputField from "../../Components/Input/InputField";
import "./Saving.css";
import AmountField from "../../Components/Input/AmountField";
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import io from 'socket.io-client';
import { useState, useEffect } from "react";
import ModalSaving from "../../Components/Modal/ModalSaving";
import credio from '../../assets/image/credio.png';
import useFetch from "../../useFetch";
const socket = io.connect("https://credio-api.herokuapp.com/payment", {
    'transports': ['websocket'],
    "query": 'phoneNumber=+2347049581457'
  },);
const Saving = () => {
    const[sidebar, setSidebar] = useState(false);
    const toggleSidebar = () =>{
      setSidebar((prevState) => !prevState)
    }
    const {data: profile, ispending, error} = useFetch(`https://credio-api.herokuapp.com/api/v1/agent/user/getProfile`);
    const [openModal, setOpenModal] = useState(false);
    let [phoneNumber, SetphoneNumber] = useState("");
    let [amount, Setamount] = useState("");
    const [message, setMessage] =useState([])
    
    useEffect(()=>{
        socket.on("connect", function(data){
            socket.emit("signon");
        });
        socket.on('payattitude', function(data) {
            setMessage(data)
            console.log(data)
            setOpenModal(true)
        });
    }, [socket])
    let proceedTransaction =(e)=>{
        e.preventDefault();
        socket.emit("sendPayattitude",{phoneNumber, amount});
    }
    function getAmount(value){
        let realAmount = parseFloat(value)*100;
        let zeros = "0".repeat(12 - realAmount.toString().length) 
        return `${zeros}${realAmount}`;
    }
    function getAmount2(value){
        let realAmount = (parseFloat(value) * 1)/100;
        console.log(realAmount.toString().length)
        let newrealAmount = realAmount.toLocaleString('en-US')
        let amount = new Intl.NumberFormat('yo-NG', { style: 'currency', currency: 'NGN' }).format(newrealAmount)
        // let zeros = "0".repeat(12 - realAmount.toString().length) 
        return `${amount}`;
    }
    // var newDate = addHours(1, dt);
    function getDate(numOfHours, value) {
        let date = new Date(value)
        date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
    
        return `${date}`;
    }
    // function getDate(value){
    //     let date = new Date(value);
    //     console.log(date)
    //     return `${date}`;
    // }
    return ( 
        <div className="saving">
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
                        <p className="deposit-text">Cardless</p>
                    </div>
                    <p className="how-save">How much do you want to save ?</p>
                    <div className="saving-body">
                        <form>
                            <div className="form-2">
                            <div className="inputfield">
                                <label>Phone Number</label><br></br>
                                <div className="inputbox2">
                                    <input
                                        onChange={(event)=>{
                                            SetphoneNumber(event.target.value)
                                        }}
                                        type="tel"
                                        placeholder="00000000"
                                    >
                                    </input>
                                    <span className='place-mobile'>Phone Number</span>
                                </div>
                            </div>
                            </div>
                            <div className="form-2">
                            <div className="amountfield">
                                <label>Amount</label><br></br>
                                <div className="amountfield-inner">
                                    <div className="inputbox">
                                        <input
                                            onChange={(event)=>{
                                                Setamount(getAmount(event.target.value))
                                            }}
                                            type='text'
                                            // placeholder={props.placeholder}
                                            required
                                        >
                                        </input>
                                        <span className='place-mobile'>Amount</span>
                                    </div>
                                    <div className="ngn"><p>NGN</p></div>
                                </div>
                        </div>
                            </div>
                            <div className="message-data">
                                {/* <h1>{message.message.success}</h1> */}
                            </div>
                            <div className="form-submit-right saving-submit withdraw-submit">
                                    <button
                                        onClick={proceedTransaction}
                                        type='submit'
                                        value="Continue"
                                        className='submit-2 withdraw-submit-2'
                                    >Continue</button>
                            </div>
                        </form>
                    </div>
                </div>
                {openModal && 
                <div className="modal-background" onClick={() => {setOpenModal(false)}}>
                    <div className="modal-container">
                    {(profile?.message?.profile ??  !1) && <p className="transaction-success">{profile?.message?.profile?.businessName ?? "************"}</p>}
                        <p className="transaction-through">{message.message.through} withdrawal</p>
                        <div className="transaction-participants">
                            <div className="transaction-center">
                                <img src={credio}></img>
                            </div>
                        </div>
                        <div className="transactions-done">
                            <div className="transactions-done-inner">
                                <div className="date-sec">
                                    <p className="trans-head">Date:</p>
                                    <p className="trans-body">{getDate(1, message.message.date)}</p>
                                </div>
                                <div className="from-to">
                                    <div className="from">
                                        <p className="trans-head">From:</p>
                                        <p className="trans-body">{message.message.data.f62.toString().substring(14)}</p>
                                    </div>
                                    <div className="to">
                                        <p className="trans-head">To:</p>
                                        <p className="trans-body">{message.message.to}</p>
                                    </div>
                                </div>
                                <div className="amount-commission">
                                    <div className="amount">
                                        <p className="trans-head">Amount:</p>
                                        <p className="trans-body">{getAmount2(message.message.data.f4)}</p>
                                    </div>
                                    <div className="commission">
                                        <p className="trans-head">AuthCode:</p>
                                        <p className="trans-body">{message.message.data.f38}</p>
                                    </div>
                                </div>
                                <div className="from-to">
                                    <div className="from">
                                        <p className="trans-head">Response Code:</p>
                                        <p className="trans-body">{message.message.data.f39}</p>
                                    </div>
                                    <div className="to">
                                        <p className="trans-head">STAN:</p>
                                        <p className="trans-body">{message.message.data.f11}</p>
                                    </div>
                                </div>
                                <div className="from-to">
                                    <div className="from">
                                        <p className="trans-head">Message:</p>
                                        <p className="trans-body">{message.message.responseMeaning}</p>
                                    </div>
                                    <div className="to">
                                        <p className="trans-head">RRN:</p>
                                        <p className="trans-body">{message.message.data.f37}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="transaction-back">
                            <button className='back-to-payment' onClick={() => {setOpenModal(false)}}>Share</button>
                        </div>
                    </div>
                </div>
        }
            </div>
        </div>
     );
}
 
export default Saving;