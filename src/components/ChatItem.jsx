import Style from '../styles/chat.module.css';
import PropTypes from 'prop-types';
function ChatItem(props) {
    
    return (
        <div className={Style.chatItem}>
                    <div className={Style.userInfo}>
                        <h3></h3>
                        <span>
                            <h2>{props.item.title} <img width="18" height="18" src="https://img.icons8.com/stickers/100/thailand.png" alt="thailand"/></h2>
                            <p>{props.item.description}</p>
                        </span>
                    </div>
                    <div className={Style.chatTime}>
                        <p>{props.item.time}</p>
                    </div>
                </div>
    )
}


ChatItem.propTypes = {
    item: PropTypes.any,
  }

export default ChatItem
