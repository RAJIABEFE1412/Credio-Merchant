import { Link } from 'react-router-dom';
import {BsArrowLeft} from 'react-icons/bs';
import "./Transaction.css";
import DashboardTable from '../../Components/Table/DashboardTable';
import MobileTable from '../../Components/Table/MobileTable';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { useState } from 'react';
const Transaction = () => {
    const[sidebar, setSidebar] = useState(false);
    const toggleSidebar = () =>{
      setSidebar((prevState) => !prevState)
    }
    return ( 
        <div className="transaction">
            <Navbar openSidebar={toggleSidebar}/>
            <div className="app-container">
                <Sidebar Sidebar={sidebar} closeSidebar={toggleSidebar}/> 
                <div className="body">
                    <div className="deposit-title">
                        <div className="back">
                            <Link to='/dashboard'>
                                <BsArrowLeft />
                            </Link>
                        </div>
                        <p className="deposit-text">Transaction History</p>
                    </div>
                    <div className="transaction-body">
                        <div className="transaction-header">
                            <div className="tran-history">
                                <p>All Transaction history</p>
                            </div>
                        </div>
                        <div className="transaction-table">
                            <MobileTable/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default Transaction;