import { Link, useLocation } from 'react-router-dom';
import Style from '../styles/chating.module.css';
import { FaAngleLeft, FaPrint, FaRegPaperPlane } from "react-icons/fa";
function Chating() {


    const location = useLocation();
    const data = location.state;
   

    return (
        <div className={Style.messageSection}>
        <div className={Style.messageContainer}>
           <div className={Style.messageHead}>
                <div className={Style.info}>
                        <Link to="/chat">
                        <FaAngleLeft />
                        </Link>
                    <span>
                        <h2>{data.title} <img width="18" height="18" src="https://img.icons8.com/stickers/100/thailand.png" alt="thailand"/></h2>
                        <p>Incoming Tenant to Microphone</p>
                    </span>
                </div>
                <div className={Style.profile}>
                    <Link to="/tenant"><FaPrint /></Link>
                    <h3></h3>
                </div>
           </div>
           <div className={Style.messageBody}>
                <div className={Style.admin}>
                    <h3></h3>
                    <h3></h3>
                </div>
                <div className={Style.customer}>
                    <h4></h4>
                    <h3></h3>
                    <h5></h5>
                </div>
           </div>
           <div className={Style.messageFooter}>
            <input type="text" placeholder="Enter your message"/>
            <FaRegPaperPlane />
           </div>
        </div>
    </div>
    )
}

export default Chating
