import './InputField.css';
const InputField = (props) => {
    return ( 
        <div className="inputfield">
            <label>{props.label}</label><br></br>
            <input
                type={props.type}
                placeholder={props.placeholder}
            >
            </input>
        </div>
     );
}
 
export default InputField;