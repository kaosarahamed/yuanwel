import Style from '../styles/checkInDetail.module.css';
import { FaAngleLeft } from "react-icons/fa";
import { RxChatBubble } from "react-icons/rx";
const CheckinDetail = () => {
    return (
        <div className={Style.roomDetail}>
        <div className={Style.detailContainer}>
            <div className={Style.detailHead}>
                <FaAngleLeft />
                <div className={Style.info}>
                    <h2>Meraprime 1 Bedroom</h2>
                <p>Tiong Bahru</p>
                </div>
            </div>
            <div className={Style.detailBody}>
                <div className={Style.detailItem}>
                    <h2>Info group 1: tenant details</h2>
                    <p>tenant name</p>
                    <p>Nationality, FIN no,</p>
                    <p>email contact no,</p>
                </div>
                <div className={Style.detailItem}>
                    <h2>Info group 2: tenancy details</h2>
                    <p>Start Date, end Date</p>
                    <p>deposit paid / rental cost</p>
                    <p>tenancy agreement (download)</p>
                </div>
                <div className={Style.detailItem}>
                    <h2>Info group 3: Inventory list of the room</h2>
                </div>
                
            </div>
            <div className={Style.action}>
                <button>Start Check-in</button>
                <RxChatBubble />
            </div>
        </div>
    </div>
    );
};

export default CheckinDetail;