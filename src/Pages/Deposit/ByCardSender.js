import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import ProfileField from "../../Components/Input/ProfileField";
import './ByCardSender.css'
const ByCardSender = () => {
    return ( 
        <div className="bycardsender">
            <div className="deposit-title">
                <div className="back">
                    <Link to='/bycard'>
                        <BsArrowLeft />
                    </Link>
                </div>
                <p className="deposit-text">Card Number Deposit</p>
            </div>
            <p className="fill">Fill The Info</p>
            <div className="bycredio-body">
                <form action="" className="bycard-form-mobile">
                        <div className="form-2">
                            <ProfileField
                                label="Sender’s name"
                                type="text"
                            />
                        </div>
                        <div className="form-2">
                            <ProfileField
                                label="Sender’s phone number"
                                type="text"
                            />
                        </div>
                        <div className="form-2">
                            <ProfileField
                                label="Make a comment"
                                type="tel"
                            />
                        </div>
                        <div className="form-1 form-submit">
                            <div className="form-submit-left">
                                <input
                                    type='submit'
                                    value="Cancle"
                                    className='submit-1'
                                ></input>
                            </div>
                            <div className="form-submit-right">
                                <button
                                    type='submit'
                                    value="Continue"
                                    className='submit-2'
                                >Continue</button>
                            </div>
                        </div>
                </form>
            </div>
        </div>
    );
}
 
export default ByCardSender;