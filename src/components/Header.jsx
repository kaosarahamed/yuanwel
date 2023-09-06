import { FaHouseDamage, FaRegBell } from "react-icons/fa";
import Style from "../styles/Header.module.css";
const Header = () => {
    return (
        <header>
        <div className={Style.headContainer}>
            <div className={Style.title}>
                <FaHouseDamage />
                <h2>Rentomate</h2>
            </div>
            <div className={Style.notification}>
                <FaRegBell />
            </div>
        </div>
    </header>
    );
};

export default Header;