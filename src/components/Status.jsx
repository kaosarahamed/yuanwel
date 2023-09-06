import Style from '../styles/status.module.css';

const Status = () => {
    return (
        <div className={Style.statusSection}>
        <div className={Style.statusContainer}>
            <div className={Style.statusHead}>
                <h2>19 Aug 2023, Sat</h2>
            </div>
            <div className={Style.statusBody}>
                <div className={Style.infoItem}>
                    <h4>Check-ins</h4>
                    <h2>3</h2>
                </div>
                <div className={Style.infoItem}>
                    <h4>Check-out</h4>
                    <h2>2</h2>
                </div>
                <div className={Style.infoItem}>
                    <h4>Viewings</h4>
                    <h2>1</h2>
                </div>
                <div className={Style.infoItem}>
                    <h4>Tasks</h4>
                    <h2>2</h2>
                </div>
            </div>
            <div className={Style.statusFooter}>
                <span></span>
                <p>57%</p>
            </div>
        </div>
    </div>
    );
};

export default Status;