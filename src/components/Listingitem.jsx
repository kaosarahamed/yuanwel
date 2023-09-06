import Style from '../styles/RoomLists.module.css';
import { FaRegClock, FaRegUser, FaExclamationTriangle, FaEllipsisV } from "react-icons/fa";
import { RxChatBubble } from "react-icons/rx";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Listingitem = (props) => {
    return (
        <div className={Style.listItem}>
                    <div className={Style.listHead}>
                        <div className={Style.timeSetting}>
                            <span>
                                <FaRegClock />
                            <p>{props.item.time}</p>
                            </span>
                            <FaEllipsisV />
                        </div>
                        <div className={Style.info}>
                            <h2>{props.item.title}</h2>
                        <p>{props.item.description}</p>
                        </div>
                    </div>
                    <div className={Style.listFooter}>
                        <div className={Style.user}>
                            <div className={Style.userLeft}>
                                <FaRegUser />
                                <span>
                                    <h4>{props.item.author} <img width="22" height="22" src="https://img.icons8.com/stickers/100/thailand.png" alt="thailand"/></h4>
                                    <h5>{props.item.date}</h5>
                                </span>
                            </div>
                            <div className={Style.userRight}>
                                <p>Payment</p>
                                <span>
                                    <FaExclamationTriangle />
                                    <h4>{props.item.status}</h4>
                                </span>
                            </div>
                            <span>
                            </span>
                        </div>
                        <div className={Style.action}>
                            <Link to={`/roomlist/${props.item.id}`} state={props.item}>Start Check-in</Link>
                        <RxChatBubble />
                        </div>
                    </div>
                </div>
    );
};

Listingitem.propTypes = {
    item: PropTypes.any,
  }

export default Listingitem;