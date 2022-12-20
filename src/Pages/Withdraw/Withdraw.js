import { Link } from "react-router-dom";
import {BsArrowLeft} from 'react-icons/bs';
import AmountField from "../../Components/Input/AmountField";
import "./Withdraw.css";
import ProfileField from "../../Components/Input/ProfileField";
const Withdraw = () => {
    return ( 
        <div className="withdraww">
            <div className="deposit-title">
                <div className="back">
                    <Link to='/'>
                        <BsArrowLeft/>
                    </Link>
                </div>
                <p className="deposit-text">Withdrawal</p>
            </div>
                <p className="how-save">How much do you want to withdraw?</p>
                <div className="withdraw-body">
                    <form >
                        <div className="form-2 withdraw-form">
                            <AmountField
                            label="Withdrawal Amount"
                            type= 'number'
                            placeholder="Amount"
                            />
                        </div>
                        <div className="form-2 withdraw-form-mobile">
                            <ProfileField
                            label="Amount"
                            type= 'number'
                            />
                        </div>
                        <div className="form-submit-right withdraw-submit">
                            <Link to="/pin">
                                <button
                                    type='submit'
                                    value="Continue"
                                    className='submit-2 withdraw-submit-2'
                                >Continue</button>
                            </Link>
                        </div>
                    </form>
                </div>
        </div>
     );
}
 
export default Withdraw;