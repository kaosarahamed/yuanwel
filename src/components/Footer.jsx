import { FaFileImport, FaHotel, FaHospital, FaCartPlus } from "react-icons/fa";
import { RxChatBubble } from "react-icons/rx";
import Style from "../styles/footer.module.css";
import { NavLink } from "react-router-dom";
import "../App.css";
const Footer = () => {
    return (
        <footer>
        <div className={Style.footerContainer}>
            <div className={Style.footerBox}>
                <NavLink to="/roomlist">
                    <FaFileImport />
                    <h2>Check-in</h2>
                </NavLink>
            </div> 
            <div className={Style.footerBox}>
                <NavLink to="/payment">
                    <FaCartPlus />
                    <h2>Payments</h2>
                </NavLink>
            </div> 
            <div className={Style.footerBox}>
                <NavLink to="/chat">
                    <RxChatBubble />
                    <h2>Chat</h2>
                </NavLink>
            </div> 
            <div className={Style.footerBox}>
                <NavLink to="/property">
                    <FaHotel />
                    <h2>Property</h2>
                </NavLink>
            </div> 
            <div className={Style.footerBox}>
                <NavLink to="/rooms">
                    <FaHospital />
                    <h2>Rooms</h2>
                </NavLink>
            </div>
        </div>
    </footer>
    );
};

export default Footer;