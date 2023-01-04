import { BsBriefcase, BsBriefcaseFill } from "react-icons/bs";
import { FaEnvelopeOpenText, FaKey } from "react-icons/fa";
import { FiCopy,FiChevronRight } from "react-icons/fi";
import {TfiHeadphoneAlt} from 'react-icons/tfi';
import {GoCreditCard} from 'react-icons/go'
import { Link } from "react-router-dom";
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import useFetch from "../../useFetch";
import { useParams } from "react-router-dom";
import { useState } from 'react';
import "./Profile.css";
const Profile = () => {
    const[sidebar, setSidebar] = useState(false);
    const toggleSidebar = () =>{
      setSidebar((prevState) => !prevState)
    }
    const {data: profile, ispending, error} = useFetch(`https://credio-api.herokuapp.com/api/v1/agent/user/getProfile`);
    return ( 
        <div className="profile">
            <Navbar openSidebar={toggleSidebar}/>
            <div className="app-container">
                <Sidebar Sidebar={sidebar} closeSidebar={toggleSidebar}/> 
                <div className="body">
                    <div className="deposit-title">
                        <div className="back">
                        </div>
                        <p className="profile-text">Profile</p>
                        <Link to='/profileform'><p className="profile-edit profile-edit-mobile">Edit</p></Link>
                    </div>
                        {ispending && <div>loading.....</div>}
                        {error && <div>{error}</div>}
                         {profile &&   console.log(profile)}
                        {(profile?.message?.profile ??  !1) &&   <div className="profile-body" > 
                                {/* key={key} */}
                                    <div className="profile-header">
                                        <div className="profile-header-inner">
                                            <div className="profile-image-con">
                                            <img className="profile-image" src={profile?.message?.profile?.profilePicture ?? "********"}></img>
                                            </div>
                                            <Link to='/profileform'><p className="profile-edit">Edit</p></Link>
                                            <p className="profile-name">{profile?.message?.profile?.bvn?.firstName ?? "************"} {profile?.message?.profile?.bvn?.lastName ?? "************"}</p>
                                            <p className="profile-location">21 liter rd, Lagos, Nigeria</p> 
                                        </div>
                                    </div>
                                    <div className="profile-vault">
                                        <div className="profile-vault-left">
                                            <p className="vault-title">Vault Number</p>
                                            <p className="vault-number">{profile?.message?.profile?.vaults?.accountNumber ?? "************"}</p>
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
                                </div>}

                </div>

            </div>
        </div>
     );
}
 
export default Profile;