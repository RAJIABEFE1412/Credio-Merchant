import { AiOutlineUserDelete } from 'react-icons/ai';
import './ChatBlock.css';
const ChatBlock = () => {
    return ( 
        <div className="chatblock">
            <div className="chatblock-top">
                <div className="chatblock-details">
                    <div className="chatblock-image">
                        <img src="https://source.unsplash.com/random/?people"></img>
                    </div>
                    <div className="chatblock-info">
                        <p className="chatblock-name">Sohail Aziz</p>
                        <p className="chatblock-last-seen">Last seen: today, 02:32</p>
                    </div>
                </div>
                <div className="chatblock-remove">
                    <AiOutlineUserDelete/>
                </div>
            </div>
            <div className="chatblock-body">
                <div className="sender">
                    <div className="sender-image">
                        <img src="https://source.unsplash.com/random/?people"></img>
                    </div>
                    <div className="sender-message-outer">
                        <div className="sender-message">
                            <p>Hey, hope u r doing well. i am ali</p>
                        </div>
                        <div className="send-time">
                            <p>04:30</p>
                        </div>
                    </div>
                </div>
                <div className="receiver">
                    <div className="receiver-image">
                        <img src="https://source.unsplash.com/random/?people"></img>
                    </div>
                    <div className="receiver-message">
                        <p>Hello</p>
                    </div>
                    <div className="receive-time">
                        <p>04:30</p>
                    </div>
                </div>
                <div className="sender">
                    <div className="sender-image">
                        <img src="https://source.unsplash.com/random/?people"></img>
                    </div>
                    <div className="sender-message-outer">
                        <div className="sender-message">
                            <p>Hey, hope u r doing well. i am ali</p>
                        </div>
                        <div className="send-time">
                            <p>04:30</p>
                        </div>
                    </div>
                </div>
                <div className="receiver">
                    <div className="receiver-image">
                        <img src="https://source.unsplash.com/random/?people"></img>
                    </div>
                    <div className="receiver-message">
                        <p>Hello</p>
                    </div>
                    <div className="receive-time">
                        <p>04:30</p>
                    </div>
                </div>
                <div className="sender">
                    <div className="sender-image">
                        <img src="https://source.unsplash.com/random/?people"></img>
                    </div>
                    <div className="sender-message-outer">
                        <div className="sender-message">
                            <p>Hey, hope u r doing well. i am ali</p>
                        </div>
                        <div className="send-time">
                            <p>04:30</p>
                        </div>
                    </div>
                </div>
                <div className="receiver">
                    <div className="receiver-image">
                        <img src="https://source.unsplash.com/random/?people"></img>
                    </div>
                    <div className="receiver-message">
                        <p>Hello</p>
                    </div>
                    <div className="receive-time">
                        <p>04:30</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ChatBlock;