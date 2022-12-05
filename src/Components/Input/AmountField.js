import './AmountField.css';
const AmountField = (props) => {
    return ( 
       <div className="amountfield">
            <label>{props.label}</label><br></br>
            <div className="amountfield-inner">
                <input
                    type={props.type}
                    placeholder={props.placeholder}
                >
                </input>
                <div className="ngn"><p>NGN</p></div>
            </div>
       </div>
     );
}
 
export default AmountField;