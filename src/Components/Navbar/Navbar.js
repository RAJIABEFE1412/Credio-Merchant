import './Navbar.css'
import {FiSearch} from 'react-icons/fi';
import {BsBell} from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
const Navbar = ({openSidebar}) => {
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
                    <div className="profile-pic">
                        <div className="navbar-image">
                            <img src='https://source.unsplash.com/random/?people'></img>
                        </div>
                        <div className="navbar-name">
                            <p className='greeting'>Good day</p>
                            <p className="name">Richard Stone</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar-mobile" onClick={openSidebar}>
                <FaBars/>
            </div>
        </div>
     );
}
 
export default Navbar;