import { useDispatch, useSelector } from "react-redux";
import Task from "../Task/Task";
import { filtertasks } from "../../ConfigRedux/Actions/TaskActions";
import React from "react";
import "../Addtask/Addtask.css"

const Tasklist = () => {
    const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filteredTasks =
    filter === 'all'
      ? tasks
      : tasks.filter((task) => (filter === 'done' ? task.isDone : !task.isDone));

    return(
        <>
            <div className="tasklist">
                <h3>Taches</h3>
                <ul>
                    {
                        filteredTasks.map((task) => (
                            <li key={task.description} type="none" className="tasksItems"
                            style={{textDecoration: task.isDone ? "line-through" : "none",}}>
                                <Task task={task} />
                            </li>
                            
                        ))
                    }
                </ul>
                <div className="itemsBtn">
                    <button onClick={() => dispatch(filtertasks('all'))}>Tout</button>
                    <button onClick={() => dispatch(filtertasks('completed'))}>Fait</button>
                    <button onClick={() => dispatch(filtertasks('pending'))}>Pas fait</button>
                </div>
            </div>
        </>
    )
}
export default Tasklist;