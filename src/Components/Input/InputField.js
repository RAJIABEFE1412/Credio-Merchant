import './InputField.css';
const InputField = (props) => {
    return ( 
        <div className="inputfield">
            <label>{props.label}</label><br></br>
            <div className="inputbox2">
                <input
                    type={props.type}
                    placeholder={props.placeholder}
                >
                </input>
                <span className='place-mobile'>{props.placeholder}</span>
            </div>
        </div>
     );
}
 
export default InputField;