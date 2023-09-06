import TaskItem from '../components/TaskItem';
import Style from '../styles/tasks.module.css';
import { FaAngleDown } from "react-icons/fa";
import statusLists from '../apis/statusLists';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Tasks = () => {

    const [status, setStatus] = useState([]);
    const [tag, setTag] = useState("All")
    const [statusCount, setStatusCount] = useState(5);
    const slicePost = status.slice(0, statusCount);

    
    useEffect(() => {
        tag === "All" ? setStatus(statusLists) : setStatus(statusLists.filter(curr => curr.status === tag))
    },[tag])

    return (
        <div className={Style.taskSection}>
        <div className={Style.taskContainer}>
            <div className={Style.taskFilter}>
                <h2 onClick={() => setTag("All")} className={tag === "All" ? Style.active : null}>All</h2>
                <h2 onClick={() => setTag("Check-in")} className={tag === "Check-in" ? Style.active : null}>Check-in</h2>
                <h2 onClick={() => setTag("Check-out")} className={tag === "Check-out" ? Style.active : null}>Check-out</h2>
                <h2 onClick={() => setTag("Viewings")} className={tag === "Viewings" ? Style.active : null}>Viewings</h2>
                <h2 onClick={() => setTag("Tasks")} className={tag === "Tasks" ? Style.active : null}>Tasks</h2>
                <h2 onClick={() => setTag("Others")} className={tag === "Others" ? Style.active : null}>Others</h2>
            </div>
            <div className={Style.allTask}>
                <div className={Style.taskItems}>
                    {
                        slicePost && slicePost.map((item, index) => {
                            return(
                                <Link key={index} to={`/roomlist/${item.id}`} state={item}>
                                <TaskItem item={item}/>
                                </Link>
                            )
                        })
                    }
                </div>
                {slicePost.length === status.length ? null : <button onClick={() => setStatusCount(slicePost.length + 2)}>2 Completed tasks <FaAngleDown /></button>}
                
            </div>
        </div>
    </div>
    );
};

export default Tasks;