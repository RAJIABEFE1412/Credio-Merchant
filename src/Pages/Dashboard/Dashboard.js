import './Dashboard.css'
import {BiUserPlus, BiDotsVerticalRounded} from 'react-icons/bi'
import {BsFillBellFill, BsUpload} from 'react-icons/bs'
import {AiFillEyeInvisible} from 'react-icons/ai';
import {FaUserCircle} from 'react-icons/fa'
import {RiCoinsFill} from 'react-icons/ri';
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
            <p className="dashboard-title">Cred Agent</p>
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
                <div className="action-button-mobile">
                    <div className="action-button-mobile-inner">
                        <div className="notification-circle-3">
                            <div className="notification-circle-2">
                                <div className="notification-circle">
                                    <BsFillBellFill/>
                                </div>
                            </div>
                            <div className="subbutton-circle deposit-circle">
                                <Link to='/deposit'>
                                    <div className="subbutton-circle-inner">
                                        <BsUpload/>
                                        <p>Deposit</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="subbutton-circle withdraw-circle">
                                <Link to='/withdraw '>
                                    <div className="subbutton-circle-inner">
                                        <BsUpload/>
                                        <p>Withdraw</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="subbutton-circle saving-circle">
                                <div className="subbutton-circle-inner">
                                    <RiCoinsFill/>
                                    <p>Savings</p>
                                </div>
                            </div>
                            <div className="subbutton-circle account-circle">
                                <div className="subbutton-circle-inner">
                                    <FaUserCircle/>
                                    <p>Account</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="action-button">
                    <Link to='/withdraw'>
                        <div className="actions withdraw-btn">
                            <TfiWallet/>
                            <p className="withdraw-text">Withdraw</p>
                        </div>
                    </Link>
                    <Link to="/deposit">
                        <div className="actions deposit2">
                            <MdOutlineSavings/>
                            <p className="deposit-text">Deposit</p>
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
                <div className="transaction-top-mobile">
                    <p className="transaction-head-mobile">Transaction History</p>
                    <p className='transaction-link'>See All</p>
                </div>
                <div className="transaction-top">
                    <p className="transaction-head">Transaction</p>
                    <Link to='/transaction'> <p className='transaction-link'>See All</p></Link>
                </div>
                <div className="transaction-table">
                    <DashboardTable/>
                </div>
                <div className="transaction-table-mobile">
                    <MobileTable/>
                </div>
            </div>
        </div>
     );
}
 
export default Dashboard;