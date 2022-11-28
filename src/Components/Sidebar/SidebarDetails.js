import {BiHome, BiUser} from 'react-icons/bi';
import {FaStore, FaPeopleArrows} from 'react-icons/fa'
export const SidebarDetails = [
    {
        title:"Dashboard",
        icon:<BiHome/>,
        link:"/"
    },
    {
        title:"Store",
        icon:<FaStore/>,
        link:"/store"
    },
    {
        title:"People",
        icon: <FaPeopleArrows/>,
        link:"/people"
    },
    {
        title:"Profile",
        icon:<BiUser/>,
        link:"/Profile"
    }
]