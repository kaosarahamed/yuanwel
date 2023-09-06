import Style from '../styles/tenantCheckIn.module.css';
import { FaAngleUp, FaEnvelope } from "react-icons/fa";
function TabItem() {
    return (
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
                                    <h4>Jeremy Lim</h4>
                                </div>
                                <div className={Style.tabInfoBody}>
                                    <span>
                                        <p>Employment ID</p>
                                        <h4>9176489320</h4>
                                    </span>
                                    <span>
                                        <p>Citizenship</p>
                                        <h4>Thai</h4>
                                    </span>
                                </div>
                                
                            </div>
                        </div>
                        <div className={Style.tabInfoFooter}>
                            <button>Yes, the identity matches</button>
                            <a href="#">No, Identity does not match</a>
                        </div>
                    </div>
    )
}

export default TabItem
