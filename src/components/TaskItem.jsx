import Style from '../styles/taskItem.module.css';
import { FaRegClock, FaLaptopHouse, FaRegCheckCircle } from "react-icons/fa";
import PropTypes from 'prop-types';


const TaskItem = (props) => {
    return (
        <div className={Style.taskItem}>
                        <div className={Style.taskList}>
                            <div className={Style.listHead}>
                                <span>
                                    <FaRegClock />
                                    <p>All day</p>  
                                </span>
                                <span>
                                    <FaLaptopHouse />
                                    <p>MRPT</p>  
                                </span>
                            </div>
                            <div className={Style.listBody}>
                                <h3>{props.item.status}</h3>
                                <p>{props.item.title}</p>
                            </div>
                        </div>
                        <div className={Style.taskCheck}>
                            <FaRegCheckCircle />
                        </div>
                    </div>
    );
};


TaskItem.propTypes = {
    item: PropTypes.any,
  }


export default TaskItem;