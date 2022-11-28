import './Dashboard.css'
import {BiUserPlus, BiDotsVerticalRounded} from 'react-icons/bi'
import {AiFillEyeInvisible} from 'react-icons/ai';
import {TfiWallet} from 'react-icons/tfi';
import {RiLuggageDepositLine} from 'react-icons/ri'
import {MdOutlineSavings} from 'react-icons/md'
import {TbCashBanknoteOff} from 'react-icons/tb'
import { Link } from 'react-router-dom';
import DashboardTable from '../../Components/Table/DashboardTable';
const Dashboard = () => {
    return ( 
        <div className="dashboard">
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
                    <div className="actions withdraw">
                        <TfiWallet/>
                        <p className="withdraw-text">Withdraw</p>
                    </div>
                    <Link to="/savings">
                        <div className="actions saving-btn">
                            <RiLuggageDepositLine/>
                            <p className="saving-text">Savings</p>
                        </div>
                    </Link>
                    <Link to="/deposit">
                        <div className="actions deposit2">
                            <MdOutlineSavings/>
                            <p className="deposit-text">Deposit</p>
                        </div>
                    </Link>
                    <div className="actions cashless">
                        <TbCashBanknoteOff/>
                        <p className="cashless-text">Cashless</p>
                    </div>
                    <div className="actions openaccount">
                        <BiUserPlus/>
                        <p className="openaccount-text">Open Account</p>
                    </div>
                    <div className="actions more">
                        <BiDotsVerticalRounded/>
                        <p className="more-text">More</p>
                    </div>
                </div>
            </div>
            <div className="transaction">
                <p className="transaction-head">Transaction</p>
                <div className="transaction-table">
                    <DashboardTable/>
                </div>
            </div>
        </div>
     );
}
 
export default Dashboard;