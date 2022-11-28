import './Modal.css'
import credio from '../../assets/image/credio.png';
const Modal = ({closeModal}) => {
    return ( 
        <div className="modal-background">
            <div className="modal-container">
                <p className="transaction-success">Transfer successful</p>
                <div className="transaction-participants">
                    <div className="transaction-right">

                    </div>
                    <div className="transaction-center">
                        <img src={credio}></img>
                    </div>
                    <div className="transaction-left">

                    </div>
                </div>
                <div className="transactions-done">
                    <div className="transactions-done-inner">
                        <div className="date-sec">
                            <p className="trans-head">Date:</p>
                            <p className="trans-body">December 7th 2020</p>
                        </div>
                        <div className="from-to">
                            <div className="from">
                                <p className="trans-head">From:</p>
                                <p className="trans-body">Johnson (agent)</p>
                                <p className="trans-body trans-body-2">**** 6786</p>
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
                                <p className="trans-body">$120,000</p>
                            </div>
                            <div className="commission">
                                <p className="trans-head">Commission:</p>
                                <p className="trans-body">$0.00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="transaction-back">
                    <button className='back-to-payment' onClick={() => {closeModal(false)}}>Back to Payment</button>
                </div>
            </div>
        </div>
     );
}
 
export default Modal;