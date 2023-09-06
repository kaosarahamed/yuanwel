import Style from '../styles/checkInSuccess.module.css';
import { FaCheckCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
function CheckInSuccess() {
    return (
        <div className={Style.checInSucess}>
        <div className={Style.checInSucessCon}>
           <div className={Style.head}>
            <RxCross2 />
           </div>
           <div className={Style.body}>
            <h2>Check-in Success</h2>
            <p>27 Aug 2023  12.18 PM</p>
            <FaCheckCircle />
           </div>
        </div>
    </div>
    )
}

export default CheckInSuccess
