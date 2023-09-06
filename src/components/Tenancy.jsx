import Style from '../styles/tenancy.module.css';
import { FaReceipt, FaChevronRight } from "react-icons/fa";

function Tenancy() {
    return (
        <div className={Style.tenantDetails}>
        <div className={Style.tenantDetailsCon}>
            <div className={Style.tenancydetailBody}>
                <div className={Style.info}>
                    <div className={Style.infoItem}>
                        <span>
                            <h3>Start Date</h3>
                    <h2>12 Dec 2023</h2>
                        </span>
                        <span>
                            <h3>Start Date</h3>
                    <h2>12 Dec 2023</h2>
                        </span>
                    </div>
                    <div className={Style.infoItem}>
                        <span>
                            <h3>Start Date</h3>
                    <h2>12 Dec 2023</h2>
                        </span>
                        <span>
                            <h3>Start Date</h3>
                    <h2>12 Dec 2023</h2>
                        </span>
                    </div>
                </div>
                <div className={Style.aggremnt}>
                    <FaReceipt />
                    <span>
                        <h2>Full Tenancy Agreement</h2>
                        <p>Singed 23 Jul 2023</p>
                    </span>
                    <FaChevronRight />
                </div>
            </div>
        </div>
    </div>
    )
}

export default Tenancy
