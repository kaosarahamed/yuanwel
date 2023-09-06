import Style from '../styles/tenant.module.css';
import { FaAngleLeft } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import "../App.css";

function TenantHeader() {
    return (
        <div className={Style.tenHeader}>
            <div className={Style.detailHead}>
                <Link to="/roomlist">
                <FaAngleLeft />
                <h2>Meraprime 1 Bedroom</h2>
                </Link>
            </div>
            <div className={Style.detailMenu}>
                <ul>
                    <li><NavLink to="/tenant">Tenant</NavLink></li>
                    <li><NavLink to="/tenancy">Tenancy</NavLink></li>
                    <li><NavLink to="/payment">Room</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default TenantHeader
