import Style from '../styles/chat.module.css';
import ChatItem from './ChatItem';
import { FaRegBell } from "react-icons/fa";
import chatList from '../apis/chatLists';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
function Chat() {

    const [chat, setChat] = useState([]);
    const [tag, setTag] = useState("All")

    const checkIn = chatList.filter(item => item.status === "Check-in");
    const checkOut = chatList.filter(item => item.status === "Check-out");


    useEffect(() => {
        tag === "All" ? setChat(chatList) : setChat(chatList.filter(curr => curr.status === tag))
    },[tag])


    return (
        <>
            <header>
        <div className={Style.headContainer}>
            <div className={Style.title}>
                <h2>Chat</h2>
            </div>
            <div className={Style.notification}>
                <FaRegBell />
            </div>
        </div>
    </header>

    <div className={Style.chatLists}>
        <div className={Style.chatListContainer}>
            <div className={Style.chatFilter}>
                <h2 onClick={() => setTag("All")} className={tag === "All" ? Style.active : null}>All <span>{chatList.length}</span></h2>
                <h2 onClick={() => setTag("Check-in")} className={tag === "Check-in" ? Style.active : null}>Check-in <span>{checkIn.length}</span></h2>
                <h2 onClick={() => setTag("Check-out")} className={tag === "Check-out" ? Style.active : null}>Check-out <span>{checkOut.length}</span></h2>
            </div>
            <div className={Style.chatItems}>
                {
                    chat && chat.map((item, index) => {
                        return(
                            <Link key={index} to={`/chat/${item.id}`} state={item}>
                            <ChatItem item={item}/>
                            </Link>
                        )  
                    })
                }
            </div>
        </div>
    </div>
        </>
    )
}

export default Chat
