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
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import useFetch from '../../useFetch';
import { useState } from 'react';
import MoonLoader from "react-spinners/MoonLoader";
const Dashboard = () => {
    const[sidebar, setSidebar] = useState(false);
    const [spinner, setSpinner]= useState(true)
    const toggleSidebar = () =>{
      setSidebar((prevState) => !prevState)
    }
    const {data: profile, ispending, error} = useFetch(`https://credio-api.herokuapp.com/api/v1/agent/user/getProfile`);
    return ( 
        <div className="dashboard">
            <Navbar openSidebar={toggleSidebar}/>
            <div className="app-container">
                <Sidebar Sidebar={sidebar} closeSidebar={toggleSidebar}/> 
                <div className="loader">
                    {ispending && <div> {
                        spinner?
                        <MoonLoader
                            color={'#B11226'}
                            loading={spinner}
                            size={50}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        /> :<div></div>}
                    </div>}
                </div>
                {error && <div>{error}</div>}
                {(profile?.message?.profile ??  !1) && 
                <div className="body">
                    <div className="notification-mobile">
                        <div className="notification-mobile-left">
                            <div className="user-square">

                              </div>
                            <div className="user-details">
                                <p className="greeting-notification">Good Day</p>
                                <p className="business-name">{profile?.message?.profile?.businessName ?? "************"}</p>
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
                                <p className="card-balance">₦{profile?.message?.profile?.vaults?.accountBalance ?? "************"}</p>
                                <p className="card-amount">Credio vault {profile?.message?.profile?.vaults?.accountNumber ?? "************"}</p>
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
                                    <p className="cashless-text">Cardless</p>
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
                </div>}
            </div>
        </div>
     );
}
 
export default Dashboard;