import "./Modal.css";
import MoonLoader from "react-spinners/MoonLoader";
import credio from "../../assets/image/credio.png";

import { connect } from "react-redux";
import { cardTranxDone } from "../../Redux/Card/CardScript";

import { FormattedNumber, IntlProvider } from "react-intl";
const Modal = ({ cardData, done }) => {
  return (
    <div className="modal-background">
      <div className="modal-container">
        {cardData.responseData && (
          <IntlProvider>
            <p className="transaction-success">
              Transfer
              {cardData.responseData.message.success ?? false
                ? " successful"
                : " unseccussful"}
            </p>
            <div className="transaction-participants">
              <div className="transaction-right"></div>
              <div className="transaction-center">
                <img src={credio}></img>
              </div>
              <div className="transaction-left"></div>
            </div>
            <div className="transactions-done">
              <div className="transactions-done-inner">
                <div className="date-sec">
                  <p className="trans-head">Date:</p>
                  <p className="trans-body">
                    {Date(cardData.responseData.date)}
                  </p>
                </div>
                <div className="from-to">
                  <div className="from">
                    <p className="trans-head">From:</p>
                    {/* <p className="trans-body">Johnson (agent)</p> */}
                    <p className="trans-body trans-body-2">
                      {cardData.responseData.message.data.maskedPan ?? "****"}
                    </p>
                  </div>
                  <div className="to">
                    <p className="trans-head">To:</p>
                    <p className="trans-body">Crediometer</p>
                    <p className="trans-body trans-body-2">**** 7860</p>
                  </div>
                </div>
                <div className="amount-commission">
                  <div className="amount">
                    <p className="trans-head">Amount:</p>
                    <p className="trans-body">
                      <FormattedNumber
                        value={
                          parseInt(cardData.responseData.message.data.f4) / 100
                        }
                        style="currency"
                        currency="NGN"
                      />
                    </p>
                  </div>

                  <div className="commission">
                    <p className="trans-head">Commission:</p>
                    <p className="trans-body">
                      {" "}
                      <FormattedNumber
                        value={0}
                        style="currency"
                        currency="NGN"
                      />
                    </p>
                  </div>
                </div>
                <div className="amount-commission">
                  <div className="amount">
                    <p className="trans-head">Response Code:</p>
                    <p className="trans-body">
                      {cardData.responseData.message.data.f39}
                    </p>
                  </div>

                  <div className="commission">
                    <p className="trans-head">Message:</p>
                    <p className="trans-body">
                      {cardData.responseData.message.responseMeaning}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="transaction-back">
              <button type="button" className="back-to-payment" onClick={done}>
                Back to Payment
              </button>
            </div>
          </IntlProvider>
        )}
        <MoonLoader
          color={"#B11226"}
          loading={cardData.loading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
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
    done: () => {
      dispatch(cardTranxDone());
    },
  };
};

export default connect(mapStoreToProps, mapDispatchToProps)(Modal);
