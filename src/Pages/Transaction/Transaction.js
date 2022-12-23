import { Link } from 'react-router-dom';
import {BsArrowLeft} from 'react-icons/bs';
import "./Transaction.css";
import DashboardTable from '../../Components/Table/DashboardTable';
import MobileTable from '../../Components/Table/MobileTable';
const Transaction = () => {
    return ( 
        <div className="transaction">
            <div className="deposit-title">
                <div className="back">
                    <Link to='/'>
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
     );
}
 
export default Transaction;