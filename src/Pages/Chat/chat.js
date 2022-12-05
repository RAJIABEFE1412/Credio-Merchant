import { AiOutlineSearch } from 'react-icons/ai';
import ChatMessages from '../../Components/Messages/ChatMessages';
import './chat.css';
const Chat = () => {
    return ( 
        <div className="chat">
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

                </div>
            </div>
        </div>
    );
}
 
export default Chat;