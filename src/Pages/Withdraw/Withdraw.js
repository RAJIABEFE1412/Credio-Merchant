import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import AmountField from "../../Components/Input/AmountField";
import "./Withdraw.css";
import io from "socket.io-client";
import { connect } from "react-redux";
import CustomModal from "../../Components/Modal/CustomModal";
import Modal from "../../Components/Modal/Modal";
import CardPin from "./CardPin";
import { startTrade } from "../../Redux/Card/CardScript";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useState } from "react";
import { buttonScan, init } from "../../Redux/Card/CardScript";
// useEffect
// const socket = io.connect("https://credio-api.herokuapp.com/payment", {
//   transports: ["websocket"],
//   query: "phoneNumber=+2347049581457",
// });

const Withdraw = ({ doTrade, cardData, cardScan }) => {
  const [sidebar, setSidebar] = useState(false);
  const [amount, setAmount] = useState("");
  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState);
  };

  // useEffect(() => {
  //   socket.on("connect", function (data) {
  //     socket.emit("signon");
  //   });
  //   socket.on("cards", function (data) {
  //     // setMessage(data);
  //     console.log(data);
  //     // setOpenModal(true)
  //   });
  // }, [socket]);
  let proceedTransaction = (e) => {
    e.preventDefault();
    console.log("bring woman come house....");
    // socket.emit("cards", { tlv: cardData.tlv, accountType: 0 });
  };

  const handleAmount = (e) => {
    console.log("amount changes");
    setAmount(e.target.value);
    console.log("amount new value -- ", e.target.value, " ----- ", amount);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cardData.connected) {
      init();
      cardScan();
    } else {
      doTrade(amount);
    }
  };
  return (
    <div className="withdraww">
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
            <p className="deposit-text">Withdrawal</p>
          </div>
          <p className="how-save">How much do you want to withdraw?</p>
          <div className="withdraw-body">
            <form>
              <div className="form-2 withdraw-form">
                <AmountField
                  // label="Withdrawal Amount"
                  onChange={handleAmount}
                  type="text"
                  placeholder="Amount"
                />
                <select
                  className="bank-select"
                  // value={nibssCode}
                  // onBlur={handleBank}
                  // onChange={handleBank}
                >
                  <optgroup>
                    <option disabled>Select Account Type</option>
                    <option value={0}>Universal/Default Account</option>
                    <option value={1}>Savings Account</option>
                    <option value={2}>Current Account</option>
                    <option value={3}>Credit Account</option>
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
                  </optgroup>
                </select>
              </div>
              {cardData.pinRequest && (
                <CustomModal
                  closeModal={cardData.pinRequest}
                  Child={<CardPin handleClick={proceedTransaction}></CardPin>}
                />
              )}

              {(cardData.loading || cardData.responseData) && (
                <Modal
                // closeModal={cardData.pinRequest}
                // Child={<CardPin handleClick={proceedTransaction}></CardPin>}
                />
              )}
              {/* <div className="form-2 withdraw-form-mobile">
                                    <ProfileField
                                    label="Amount"
                                    type= 'number'
                                    />
                                </div> */}
              <div className="form-submit-right withdraw-submit">
                {/* <Link to="/pin"> */}
                <button
                  type="submit"
                  value={
                    !cardData.connected ? "Rescan To Continue" : "Continue"
                  }
                  onClick={handleSubmit}
                  className="submit-2 withdraw-submit-2"
                >
                  {!cardData.connected ? "Rescan && Continue" : "Continue"}
                </button>
                {/* </Link> */}
              </div>
            </form>
          </div>
        </div>
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
    doTrade: (postState) => {
      console.log("got here ....... . ... ");
      dispatch(startTrade(postState));
    },
    cardScan: () => {
      dispatch(buttonScan());
    },
  };
};

export default connect(mapStoreToProps, mapDispatchToProps)(Withdraw);
