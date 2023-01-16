import './Navbar.css'
import { useState } from 'react';
import {FiSearch} from 'react-icons/fi';
import {BsBell} from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import useFetch from '../../useFetch';
const Navbar = ({openSidebar}) => {
    const {data: profile, ispending, error} = useFetch(`https://credio-api.herokuapp.com/api/v1/agent/user/getProfile`);
    return ( 
        <div className="navbar">
            <div className="navbar-inner">
                <div className="logo">
                    <p className="logo-text">Credio Merchant</p>
                </div>
                <div className="searchbar">
                    <FiSearch/>
                    <input
                        type="text"
                        placeholder="find Something"
                    ></input>
                </div>
                <div className="profile-side">
                    <div className="bell">
                        <BsBell/>
                    </div>
                    {(profile?.message?.profile ??  !1) && 
                        <div className="profile-pic">
                            <div className="navbar-image">
                                <img src={profile?.message?.profile?.profilePicture ?? "********"}></img>
                            </div>
                            <div className="navbar-name">
                                <p className='greeting'>Good day</p>
                                <p className="name">{profile?.message?.profile?.bvn?.firstName ?? "************"} {profile?.message?.profile?.bvn?.lastName ?? "************"}</p>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div className="navbar-mobile" onClick={openSidebar}>
                <FaBars/>
            </div>
        </div>
     );
}
 
export default Navbar;