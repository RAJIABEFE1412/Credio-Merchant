import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const SavingPreview = () => {
    return ( 
        <div className="savingpreview">
            <div className="deposit-title">
                <div className="back">
                    <Link to='/deposit'>
                        <BsArrowLeft />
                    </Link>
                </div>
                <p className="deposit-text">Cashless</p>
            </div>
            <div className="saving-preview-body">
                <div className="form-1 preview-1">
                    <div className="form-left select-left">
                        <p className="receipt-head">Phone Number</p>
                    </div>
                    <div className="form-right  select-left">
                        <p className="receipt-body">090364356354</p>
                    </div>
                </div>
                <div className="form-1 preview-1">
                    <div className="form-left select-left">
                        <p className="receipt-head">Amount to debit </p>
                    </div>
                    <div className="form-right  select-left">
                        <p className="receipt-body">N29,000</p>
                    </div>
                </div>
                <div className="form-1 form-submit preview-submit">
                    <div className="form-submit-left">
                        <input
                            type='submit'
                            value="Cancle"
                            className='submit-1'
                        ></input>
                    </div>
                    <div className="form-submit-right">
                            <button
                                // onClick={()=> setOpenModal(true)}
                                type='submit'
                                value="Continue"
                                className='submit-2'
                            >Continue</button>
                        {/* {openModal && <Modal closeModal={setOpenModal}/>} */}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default SavingPreview;