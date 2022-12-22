import "./MobileTable.css";
import {BsArrowUpRight} from 'react-icons/bs'
const MobileTable = () => {
    return ( 
        <div className="mobiletable">
            <div className="mobiletable-inner">
                <div className="mobiletable-inner-left">
                    <div className="mobile-status">
                        <BsArrowUpRight/>
                    </div>
                    <div className="mobile-transaction">
                        <p className="mobile-tran-name">CREDIO/IBRACH</p>
                        <p className="mobile-tran-status"><span>N 450.00</span> outgoing transaction</p>
                    </div>
                </div>
                <div className="mobiletable-inner-right">
                    <p className="transaction-date">15-12-2022</p>
                </div>
            </div>
        </div>
     );
}
 
export default MobileTable;