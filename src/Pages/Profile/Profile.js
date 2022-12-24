import { BsBriefcase, BsBriefcaseFill } from "react-icons/bs";
import { FaEnvelopeOpenText, FaKey } from "react-icons/fa";
import { FiCopy,FiChevronRight } from "react-icons/fi";
import {TfiHeadphoneAlt} from 'react-icons/tfi';
import {GoCreditCard} from 'react-icons/go'
import { Link } from "react-router-dom";
import "./Profile.css";
const Profile = () => {
    return ( 
        <div className="profile">
            <div className="deposit-title">
                <div className="back">
                </div>
                <p className="profile-text">Profile</p>
                <Link to='/profileform'><p className="profile-edit profile-edit-mobile">Edit</p></Link>
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
                <div className="profile-vault">
                    <div className="profile-vault-left">
                        <p className="vault-title">Vault Number</p>
                        <p className="vault-number">801 5101 822</p>
                    </div>
                    <div className="profile-vault-right">
                        <FiCopy/>
                    </div>
                </div>
                <div className="profile-subbody">
                    <div className="manage">
                        <div className="manage-left">
                            <div className="manage-icon-outer">
                                <div className="manage-icon">
                                    <BsBriefcaseFill/>
                                </div>
                            </div>
                            <p className="manage-text">Third Party Account</p>
                        </div>
                        <div className="manage-right">
                            <FiChevronRight/>
                        </div>
                    </div>
                    <div className="change">
                        <div className="manage-left">
                            <div className="change-icon-outer">
                                <div className="change-icon">
                                    <FaKey/>
                                </div>
                            </div>
                            <p className="change-text">Change app pin</p>
                        </div>
                        <div className="manage-right">
                            <FiChevronRight/>
                        </div>
                    </div>
                    <div className="manage">
                        <div className="manage-left">
                            <div className="manage-icon-outer">
                                <div className="manage-icon">
                                    <GoCreditCard/>
                                </div>
                            </div>
                            <p className="manage-text">Activate Credio Reader</p>
                        </div>
                        <div className="manage-right">
                            <FiChevronRight/>
                        </div>
                    </div>
                    <div className="invite">
                        <div className="manage-left">
                            <div className="invite-icon-outer">
                                <div className="invite-icon">
                                    <FaEnvelopeOpenText/>
                                </div>
                            </div>
                            <p className="invite-text">invite a friend</p>
                        </div>
                        <div className="manage-right">
                            <FiChevronRight/>
                        </div>
                    </div>
                    <div className="manage">
                        <div className="manage-left">
                            <div className="manage-icon-outer">
                                <div className="manage-icon">
                                    <TfiHeadphoneAlt/>
                                </div>
                            </div>
                            <p className="manage-text">Chat with us</p>
                        </div>
                        <div className="manage-right">
                            <FiChevronRight/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Profile;