import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { connect } from "react-redux";
import InputField from "../../Components/Input/InputField";
import "./Saving.css";
import AmountField from "../../Components/Input/AmountField";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useState, useEffect } from "react";
import ModalSaving from "../../Components/Modal/ModalSaving";
import credio from "../../assets/image/credio.png";
import useFetch from "../../useFetch";
import { sendCardless } from "../../Redux/socket/SocketAction";
import Modal from "../../Components/Modal/Modal";

const Saving = ({ data, cardless }) => {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState);
  };
  const {
    data: profile,
    ispending,
    error,
  } = useFetch(`https://credio-api.herokuapp.com/api/v1/agent/user/getProfile`);
  const [openModal, setOpenModal] = useState(false);
  let [phoneNumber, SetphoneNumber] = useState("");
  let [amount, Setamount] = useState("");
  const [message, setMessage] = useState([]);

  // useEffect(()=>{
  //     socket.on("connect", function(data){
  //         socket.emit("signon");
  //     });

  // }, [socket])
  let proceedTransaction = (e) => {
    e.preventDefault();
    console.log("come off it");
    cardless({ phoneNumber, amount });
    // socket.emit("",);
  };
  function getAmount(value) {
    let realAmount = parseFloat(value) * 100;
    let zeros = "0".repeat(12 - realAmount.toString().length);
    return `${zeros}${realAmount}`;
  }
  function getAmount2(value) {
    let realAmount = (parseFloat(value) * 1) / 100;
    console.log(realAmount.toString().length);
    let newrealAmount = realAmount.toLocaleString("en-US");
    let amount = new Intl.NumberFormat("yo-NG", {
      style: "currency",
      currency: "NGN",
    }).format(newrealAmount);
    // let zeros = "0".repeat(12 - realAmount.toString().length)
    return `${amount}`;
  }
  // var newDate = addHours(1, dt);
  function getDate(numOfHours, value) {
    let date = new Date(value);
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
      <Navbar openSidebar={toggleSidebar} />
      <div className="app-container">
        <Sidebar Sidebar={sidebar} closeSidebar={toggleSidebar} />
        <div className="body">
          <div className="deposit-title">
            <div className="back">
              <Link to="/dashboard">
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
                  <label>Phone Number</label>
                  <br></br>
                  <div className="inputbox2">
                    <input
                      onChange={(event) => {
                        SetphoneNumber(event.target.value);
                      }}
                      type="tel"
                      placeholder="00000000"
                    ></input>
                    <span className="place-mobile">Phone Number</span>
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
                        onChange={(event) => {
                          Setamount(getAmount(event.target.value));
                        }}
                        type="text"
                        // placeholder={props.placeholder}
                        required
                      ></input>
                      <span className="place-mobile">Amount</span>
                    </div>
                    <div className="ngn">
                      <p>NGN</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="message-data">
                {/* <h1>{message.message.success}</h1> */}
              </div>
              <div className="form-submit-right saving-submit withdraw-submit">
                <button
                  onClick={proceedTransaction}
                  type="submit"
                  value="Continue"
                  className="submit-2 withdraw-submit-2"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
        {(data.card.loading || data.card.responseData) && (
                <Modal
                // closeModal={cardData.pinRequest}
                // Child={<CardPin handleClick={proceedTransaction}></CardPin>}
                />
              )}  
      </div>
    </div>
  );
};

const mapStoreToProps = (state) => {
  return {
    data: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    cardless: (postState) => {
      console.log("got here ....... . ... ");
      dispatch(sendCardless(postState));
    },
  };
};

export default connect(mapStoreToProps, mapDispatchToProps)(Saving);
