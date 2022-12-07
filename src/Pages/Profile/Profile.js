import { BsBriefcase, BsBriefcaseFill } from "react-icons/bs";
import { FaEnvelopeOpenText, FaKey } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Profile.css";
const Profile = () => {
    return ( 
        <div className="profile">
            <div className="deposit-title">
                <div className="back">
                </div>
                <p className="profile-text">Profile</p>
            </div>
            <div className="profile-body">
                <div className="profile-header">
                    <div className="profile-header-inner">
                        <div className="profile-image-con">
                        <img className="profile-image" src="https://source.unsplash.com/random/?people"></img>
                        </div>
                        <Link to='/profileform'><p className="profile-edit">Edit</p></Link>
                        <p className="profile-name">Adewuni Crediometer</p>
                        <p className="profile-location">21 liter rd, Lagos, Nigeria</p>
                    </div>
                </div>
                <div className="profile-subbody">
                    <div className="manage">
                        <div className="manage-icon-outer">
                            <div className="manage-icon">
                                <BsBriefcaseFill/>
                            </div>
                        </div>
                        <p className="manage-text">Manage your Group</p>
                    </div>
                    <div className="change">
                        <div className="change-icon-outer">
                            <div className="change-icon">
                                <FaKey/>
                            </div>
                        </div>
                        <p className="change-text">Change app pin</p>
                    </div>
                    <div className="invite">
                        <div className="invite-icon-outer">
                            <div className="invite-icon">
                                <FaEnvelopeOpenText/>
                            </div>
                        </div>
                        <p className="invite-text">invite a friend</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Profile;