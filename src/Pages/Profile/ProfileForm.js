import { FiCopy } from "react-icons/fi";
import { Link } from 'react-router-dom';
import {BsArrowLeft} from 'react-icons/bs';
import ProfileField from "../../Components/Input/ProfileField";
import "./ProfileForm.css";
const ProfileForm = () => {
    return ( 
        <div className="profileform">
            <div className="deposit-title">
                <div className="back">
                    <Link to='/profile'>
                        <BsArrowLeft />
                    </Link>
                </div>
                <p className="profile-text">Profile</p>
            </div>
            <div className="profileform-body">
                <div className="profile-header">
                    <div className="profile-header-inner">
                        <div className="profile-image-con">
                        <img className="profile-image" src="https://source.unsplash.com/random/?people"></img>
                        </div>
                        <p className="profile-name">Adewuni Crediometer</p>
                        <p className="profile-location">21 liter rd, Lagos, Nigeria</p>
                    </div>
                </div>
                <div className="profileform-subbody">
                    <div className="profileform-subbody-inner">
                        <ProfileField
                            label="Business name"
                            type="text"
                            placeholder="Adewumi crediometer"
                        /> 
                        <ProfileField
                            label="Business Address"
                            type="text"
                            placeholder="Link road,  nigeria 445Cho"
                        />
                        <ProfileField
                            label="Phone number"
                            type="password"
                            placeholder="08099445747"
                        />
                        <ProfileField
                            label="Last Login Detail"
                            type="text"
                            placeholder="21 - june - 2021, 4:30 PM"
                        /> 
                    </div>
                </div>
            </div>
            <div className="profileform-footer">
                <div className="copy-icon">
                    <FiCopy/>
                </div>
            </div>
        </div>
     );
}
 
export default ProfileForm;