import './ProfileField.css'
const ProfileField = (props) => {
    return ( 
        <div className="profilefield">
             <label>{props.label}</label><br></br>
            <input
                type={props.type}
                defaultValue ={props.placeholder}
            >
            </input>
        </div>
     );
}
 
export default ProfileField;