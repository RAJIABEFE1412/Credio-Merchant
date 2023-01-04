import { AiOutlineSearch } from 'react-icons/ai';
import {ImAttachment} from 'react-icons/im';
import {FiSend} from 'react-icons/fi';
import ChatBlock from '../../Components/Messages/ChatBlock';
import ChatMessages from '../../Components/Messages/ChatMessages';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './chat.css';
import { useState } from 'react';
const Chat = () => {
    const[sidebar, setSidebar] = useState(false);
    const toggleSidebar = () =>{
      setSidebar((prevState) => !prevState)
    }
    return ( 
        <div className="chat">
            <Navbar openSidebar={toggleSidebar}/>
            <div className="app-container">
                <Sidebar Sidebar={sidebar} closeSidebar={toggleSidebar}/> 
                <div className="body">
                    <p className="chat-header">Chats</p>
                    <div className="chat-body">
                        <div className="chat-left">
                            <div className="chat-search">
                                <AiOutlineSearch/>
                                <input
                                    type="text"
                                    placeholder="search for somebody"
                                ></input>
                            </div>
                            <div className="chat-message">
                                <ChatMessages/>
                            </div>
                        </div>
                        <div className="chat-right">
                            <ChatBlock/>
                            <div className="chat-input">
                                <input type='text' placeholder='Type a message....'>
                                </input>
                                <div className="chat-icons">
                                    <div className="attach-icon">
                                        <ImAttachment/>
                                    </div>
                                    <div className="send-icon">
                                        <FiSend/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
 
export default Chat;