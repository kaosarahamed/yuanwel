import Style from '../styles/RoomLists.module.css';
import Listingitem from '../components/Listingitem';
import { Link } from 'react-router-dom';
import { FaAngleLeft } from "react-icons/fa";
import roomLists from '../apis/roomLists';

const RoomLists = () => {
    return (
        <div className={Style.roomLists}>
        <div className={Style.listContainer}>
            <Link to="/" className={Style.backButton}>
                <FaAngleLeft />
                <h3>Back</h3>
            </Link>
            <div className={Style.listItems}>
                {
                    roomLists && roomLists.map((item, index) => {

                        return(
                            <Listingitem key={index} item={item}/>
                        )
                    })
                }
            </div>
        </div>
    </div>
    );
};

export default RoomLists;