import './Sidebar.css';
import { SidebarDetails } from './SidebarDetails';
import {Link} from 'react-router-dom'
import {IoLogInOutline} from 'react-icons/io5'
const Sidebar = () => {
    return ( 
        <div className="sidebar">
            <div className="links">
                <nav>
                {SidebarDetails.map((val, key)=>{
                        return(
                            <li
                                key={key}
                                className="link-path"
                            >
                                <Link to={val.link}>
                                    <div className="sideicon">
                                        <div className="sideicon-inner">
                                            {val.icon}
                                        </div>
                                    </div>
                                    <div className="address-name">{val.title}</div>
                                </Link>
                            </li>
                        )
                    })}
                </nav>
            </div>
            <div className="links">
                <li className='logout'>
                    <div className="sideicon">
                        <div className="sideicon-inner">
                            <IoLogInOutline/>
                        </div>
                    </div>
                    <div className="address-name logout-name">Logout</div>
                </li>
            </div>
        </div>
     );
}
 
export default Sidebar;