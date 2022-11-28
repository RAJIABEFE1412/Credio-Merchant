const SelectField = () => {
    return ( 
        <div className="selectfield">
            <label>{props.label}</label><br></br>
            <select
                type={props.type}
                placeholder={props.placeholder}
            >
            </select>
        </div>
     );
}
 
export default SelectField;