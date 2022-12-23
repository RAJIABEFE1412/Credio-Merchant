import './TextField.css';
const TextField = (props) => {
    return ( 
        <div className="textfield">
             <label>{props.label}</label><br></br>
                <div className="inputbox2">
                    <textarea
                      type={props.type}
                      placeholder={props.placeholder}
                    >
                    </textarea>
                    <span>{props.placeholder}</span>
                </div>
        </div>
    );
}
 
export default TextField;