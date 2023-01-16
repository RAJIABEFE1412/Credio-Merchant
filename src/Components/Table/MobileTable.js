import "./MobileTable.css";
import {BsArrowUpRight} from 'react-icons/bs'
import useFetch from "../../useFetch";
import MoonLoader from "react-spinners/MoonLoader";
import { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { fetchTransaction } from "../../Redux/Transaction/TransactionAction";
const MobileTable = ({transactionData, fetchTransaction}) => {
    const [spinner, setSpinner]= useState(true)

    useEffect(()=>{
        fetchTransaction()
        console.log(transactionData)
        
    }, [])
    // const {data: transaction, ispending, error} = useFetch(`https://credio-api.herokuapp.com/api/v1/agent/user/account/transaction/history`);
    return ( 
        <div className="mobiletable">
            <div className="loader">
                {transactionData.loading && <div> {
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
            {transactionData.error && <div>{transactionData.error}</div>}
            {transactionData && transactionData?.transaction && transactionData?.transaction.map((transaction)=>{
                return(
                    <div className="mobiletable-inner">
                        <div className="mobiletable-inner-left">
                            <div className="mobile-status-outer">
                                <div className="mobile-status">
                                    <BsArrowUpRight/>
                                </div>
                            </div>
                            <div className="mobile-transaction">
                                <p className="mobile-tran-name">CREDIO/{transaction.from ?? "************"}</p>
                                <p className="mobile-tran-status"><span>₦{transaction.amount ?? "************"}</span> outgoing transaction</p>
                            </div>
                        </div>
                        <div className="mobiletable-inner-right">
                            <p className="transaction-date">15-12-2022</p>
                        </div>
                    </div>
                )})}
        </div>
     );
}

const mapStoreToProps = state => {
    return{
        transactionData: state.transaction
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchTransaction: () => dispatch(fetchTransaction())
    }
}
 
export default connect(mapStoreToProps, mapDispatchToProps)(MobileTable);