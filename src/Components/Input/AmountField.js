import './AmountField.css';
const AmountField = (props) => {
    return ( 
       <div className="amountfield">
            <label>{props.label}</label><br></br>
            <div className="amountfield-inner">
                <div className="inputbox">
                    <input
                        type={props.type}
                        // placeholder={props.placeholder}
                        required
                    >
                    </input>
                    <span className='place-mobile'>Amount</span>
                </div>
                <div className="ngn"><p>NGN</p></div>
            </div>
       </div>
     );
}
 
export default AmountField;