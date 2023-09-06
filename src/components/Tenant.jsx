
import Style from '../styles/tenant.module.css';
import { FaEnvelope } from "react-icons/fa";

function Tenant() {
    return (
        <div className={Style.tenantDetails}>
        <div className={Style.tenantDetailsCon}>
            <div className={Style.detailBody}>
                <div className={Style.detailItem}>
                <FaEnvelope />
                </div>
                <div className={Style.detailItems}>
                    <div className={Style.detailItem}>
                        <h3>Name</h3>
                        <h2>Jeremy Lim</h2>
                    </div>
                    <div className={Style.detailItem}>
                        <h3>Contact No.</h3>
                        <h2>+65 9173 2841</h2>
                    </div>
                    <div className={Style.detailItem}>
                        <h3>Email</h3>
                        <h2>jeremy@gmail.com</h2>
                    </div>
                    <div className={Style.detailItem}>
                        <div className={Style.bottomInfo}>
                            <span>
                                <h3>Employment ID</h3>
                            <h2>91765892320</h2>
                            </span>
                            <span>
                                <h3>Citizenship</h3>
                            <h2>Thai</h2>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Tenant;