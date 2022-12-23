import './Dashboard.css'
import {BiUserPlus, BiDotsVerticalRounded} from 'react-icons/bi'
import {BsFillBellFill, BsUpload} from 'react-icons/bs'
import {AiFillEyeInvisible} from 'react-icons/ai';
import {FaUserCircle} from 'react-icons/fa'
import {RiCoinsFill} from 'react-icons/ri';
import {HiBellAlert} from 'react-icons/hi2'
import {TfiWallet} from 'react-icons/tfi';
import {RiLuggageDepositLine} from 'react-icons/ri'
import {MdOutlineSavings} from 'react-icons/md'
import {TbCashBanknoteOff} from 'react-icons/tb'
import { Link } from 'react-router-dom';
import DashboardTable from '../../Components/Table/DashboardTable';
import MobileTable from '../../Components/Table/MobileTable';
const Dashboard = () => {
    return ( 
        <div className="dashboard">
            <div className="notification-mobile">
                <div className="notification-mobile-left">
                    <div className="user-square">

                    </div>
                    <div className="user-details">
                        <p className="greeting-notification">Good Day</p>
                        <p className="business-name">TourEarth</p>
                    </div>
                </div>
                <div className="notification-mobile-right">
                    <HiBellAlert/>
                </div>
            </div>
            <div className="vault">
                <p className="vault-text">Vault</p>
                <div className="vault-card">
                    <div className="vault-card-left">
                        <p className="card-balance">₦278,000.00</p>
                        <p className="card-amount">Credio vault 009847473734</p>
                    </div>
                    <div className="vault-card-right">
                        <AiFillEyeInvisible/>
                    </div>
                </div>
            </div>
            <div className="action">
                <p className="action-text">Actions</p>
                <div className="action-button">
                    <Link to='/withdraw'>
                        <div className="actions withdraw-btn">
                            <TfiWallet/>
                            <p className="withdraw-text">Withdraw</p>
                        </div>
                    </Link>
                    <Link to="/bybank">
                        <div className="actions deposit2">
                            <MdOutlineSavings/>
                            <p className="deposit-text">Deposit</p>
                        </div>
                    </Link>
                    <Link to="/bycredio">
                        <div className="actions credio-btn">
                            <TbCashBanknoteOff/>
                            <p className="cashless-text">Credio</p>
                        </div>
                    </Link>
                    <Link to="/cashless">
                        <div className="actions cashless">
                            <TbCashBanknoteOff/>
                            <p className="cashless-text">Cashless</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="transaction">
                <div className="transaction-top">
                    <p className="transaction-head">Transaction History</p>
                    <Link to='/transaction'> <p className='transaction-link'>See All</p></Link>
                </div>
                {/* <div className="transaction-table">
                    <DashboardTable/>
                </div> */}
                <div className="transaction-table-mobile">
                    <MobileTable/>
                </div>
            </div>
        </div>
     );
}
 
export default Dashboard;