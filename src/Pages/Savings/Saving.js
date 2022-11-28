import { Link } from "react-router-dom";
import {BsArrowLeft} from 'react-icons/bs';
import InputField from "../../Components/Input/InputField";
import "./Saving.css";
const Saving = () => {
    return ( 
        <div className="saving">
            <div className="deposit-title">
                <div className="back">
                    <Link to='/deposit'>
                        <BsArrowLeft />
                    </Link>
                </div>
                <p className="deposit-text">Cashless</p>
            </div>
            <p className="how-save">How much do you want to save ?</p>
            <div className="saving-body">
                <form>
                    <div className="form-2">
                        <InputField
                            label="Phone Number"
                            type="tel"
                            placeholder='09029374757'
                        />
                    </div>
                    <div className="form-2">
                        <InputField
                            label="Account to Debit"
                            type="tel"
                            placeholder='Account number'
                        />
                    </div>
                    <div className="form-submit-right saving-submit">
                        <Link to="/savingpreview">
                            <button
                                type='submit'
                                value="Continue"
                                className='submit-2'
                            >Continue</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Saving;