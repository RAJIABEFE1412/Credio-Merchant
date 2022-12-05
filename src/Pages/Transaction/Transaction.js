import { Link } from 'react-router-dom';
import {BsArrowLeft} from 'react-icons/bs';
import "./Transaction.css";
import DashboardTable from '../../Components/Table/DashboardTable';
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
                        <p>Transactions History</p>
                    </div>
                    <div className="tran-sort">
                        <div className="sort-by">
                            <select>
                                <optgroup>
                                    <option>Sort By</option>
                                </optgroup>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="transaction-table">
                    <DashboardTable/>
                </div>
            </div>
        </div>
     );
}
 
export default Transaction;