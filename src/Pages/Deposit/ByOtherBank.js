import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./ByOtherBank.css";
import { useNavigate } from 'react-router-dom';
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { fetchBank, postData, reqData } from "../../Redux/Bank/BankAction";
const ByOtherBank = ({ bankData, fetchBank, postData, nameData, reqData }) => {
  // const {data: bank, ispending, error} = useFetch(`https://credio-api.herokuapp.com/api/v1/agent/action/deposit/nibss`)
  const [sidebar, setSidebar] = useState(false);
  const [spinner, setSpinner] = useState(true);
  const [nibssCode, setnibssCode] = useState(null);
  const [accountNumber, setaccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [narration, setnarration] = useState("");
  const history = useNavigate();
  const debitAccountNumber = "0118462550";
  const saveBeneficiary = false;
  const saveBeneficiaryForUs = false;
  const [postState, setPostState] = useState({});
  // const [depositState, setDepositState] = useState({});
  // const dataurl = 'https://credio-api.herokuapp.com/api/v1/agent/action/deposit/nibss/name';
  // const {data: bankname} = useFetch(dataurl);
  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState);
  };

  useEffect(() => {
    fetchBank();
    console.log(bankData);
  }, []);

  const handleBank = (e) => {
    const value = e.target.value;
    setnibssCode(value);
    console.log(value);
    handleFetchData();
    setPostState({ ...postState, ...{ nibssCode } });
  };
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
    // setDepositState({ ...depositState, ...{ amount } });
    // console.log("state -- ", depositState);
  };
  const handleComment = (e) => {
    const value = e.target.value;
    console.log(value);
    setnarration(value);
    // setDepositState({
    //   ...depositState,
    //   ...{ narration },
    //   ...{ saveBeneficiary },
    //   ...{ saveBeneficiaryForUs },
    //   ...{ debitAccountNumber },
    // });
    // console.log("state -- ", depositState);
  };
  // const nameEnquiryReference = nameData.bankname.bankname.data.sessionId
  // setDepositState({...depositState, ...{nameEnquiryReference}})
  const handleFetchData = () => {
    console.log(
      "this method has been called::: ",
      nibssCode,
      accountNumber.toString().length
    );
    if (nibssCode !== "" && accountNumber.toString().length >= 9) {
      postData(postState);
    }
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
    history(`/preview`);
  };
  // const [openModal, setOpenModal] = useState(false);

  // useEffect(()=>{
  //     // this is the issue ( You basically telling the system that un reload (when I set states), check if these two are set then fetch me this data)

  // })
  return (
    <div className="byotherbank">
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
            <p className="deposit-text">Other bank Deposit</p>
          </div>
          <div className="bycredio-body">
            <form>
              <div className="form-1">
                <div className="form-left select-left">
                  <label className="select-label">Bank Name</label>
                  <br></br>
                  <select
                    className="bank-select"
                    value={nibssCode}
                    onBlur={handleBank}
                    onChange={handleBank}
                  >
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
                      {bankData &&
                        bankData.bank &&
                        bankData.bank.map((banks) => {
                          return (
                            <option value={banks.routingKey}>
                              {banks.name}
                            </option>
                          );
                        })}
                    </optgroup>
                  </select>
                </div>
                <div className="form-right">
                  <div className="inputfield">
                    <label>Account Number</label>
                    <br></br>
                    <div className="inputbox2">
                      <input
                        type="text"
                        placeholder="Account Number"
                        onBlur={handleNumber}
                        onChange={handleNumber}
                      ></input>
                      <span className="place-mobile">Account Number</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-1">
                <div className="form-right">
                  <div className="inputfield">
                    <label>Account Name</label>
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
                <div className="form-left">
                  <div className="amountfield">
                    <label>Amount</label>
                    <br></br>
                    <div className="amountfield-inner">
                      <div className="inputbox">
                        <input
                          type="number"
                          onBlur={handleAmount}
                          onChange={handleAmount}
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
                    <span className=" ">Make a Comment</span>
                  </div>
                </div>
              </div>
              <div className="form-submit">
                <div className="form-submit-left">
                  <input
                    type="submit"
                    value="Cancel"
                    className="submit-1"
                  ></input>
                </div>
                <div className="form-submit-right">
                  <button
                    type="submit"
                    value="Continue"
                    className="submit-2"
                    onClick={handleSubmit}
                  >
                    Continue
                  </button>
                  {/* {openModal && <Modal closeModal={setOpenModal}/>} */}
                </div>
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

export default connect(mapStoreToProps, mapDispatchToProps)(ByOtherBank);
