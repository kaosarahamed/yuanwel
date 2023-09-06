import Style from '../styles/tenantCheckIn.module.css';
import { FaExclamationTriangle, FaLock, FaAngleLeft, FaAngleUp, FaEnvelope } from "react-icons/fa";
import { RxReload } from "react-icons/rx";
import { Link, useLocation } from 'react-router-dom';
function TenantCheckIn() {


    const location = useLocation();
    const data = location.state;
    console.log(data);

    return (
        <div className={Style.tenantCheckin}>
        <div className={Style.tanCheckinCon}>
            <div className={Style.tanHeader}>
                <Link to="/roomlist">
                <FaAngleLeft />
                <h3>Tenant Check-in</h3>
                </Link>
            </div>
            <div className={Style.tanSteps}>
                <span>
                    <FaExclamationTriangle />
                    <h4>Identity</h4>
                </span>
                <span>
                <FaExclamationTriangle />
                    <h4>Payemnt</h4>
                </span>
                <span>
                <FaExclamationTriangle />
                    <h4>Handover Proof</h4>
                </span>
            </div>
            <div className={Style.tenFooter}>
                <div className={Style.tabItems}>
                    <div className={Style.tabItem}>
                        <div className={Style.tabItemHead}>
                            <div className={Style.titles}>
                                <span></span>
                                <h2>Identity Verification</h2>
                                <FaAngleUp />
                            </div>
                            <p>Please Verify that the tentants physucal ID matched the information below:</p>
                        </div>
                        <div className={Style.tabItelBody}>
                            <FaEnvelope />
                            <div className={Style.tabInfo}>
                                <div className={Style.tabinfoHead}>
                                    <p>Name</p>
                                    <h4>{data.author}</h4>
                                </div>
                                <div className={Style.tabInfoBody}>
                                    <span>
                                        <p>Employment ID</p>
                                        <h4>9176489320</h4>
                                    </span>
                                    <span>
                                        <p>Citizenship</p>
                                        <h4>{data.date}</h4>
                                    </span>
                                </div>
                                
                            </div>
                        </div>
                        <div className={Style.tabInfoFooter}>
                            <button>Yes, the identity matches</button>
                            <a href="#">No, Identity does not match</a>
                        </div>
                    </div>
                    <div className={Style.tabItem}>
                        <div className={Style.tabItemHead}>
                            <div className={Style.titles}>
                                <span></span>
                                <h2>Payment</h2>
                                <FaAngleUp />
                            </div>
                            <p>Please ask tentant to make payment via the tenant mobile app or the llink via his email:</p>
                        </div>
                        <div className={Style.status}>
                            <div className={Style.statusInfo}>
                                <p>Tenant Payment Status</p>
                                <span>
                                    <FaExclamationTriangle />
                                    <h4>Not Paid</h4>
                                </span>
                            </div>
                            <RxReload />
                        </div>
                    </div>
                    <div className={Style.tabItem}>
                        <div className={Style.tabItemHead}>
                            <div className={Style.titles}>
                                <span></span>
                                <h2>Handover</h2>
                                <FaAngleUp />
                            </div>
                            <p>Please take photo proof of key handover to tenant:</p>
                        </div>
                        <div className={Style.paymentTab}>
                            <span>
                                <FaLock />
                                  <h4>Locked until payment made</h4>
                            </span>                            
                        </div>
                    </div>
                    <div className={Style.button}>
                        <button>Check In Tenant</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default TenantCheckIn
