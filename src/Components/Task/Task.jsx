import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removetask, toggletask, updatetask } from "../../ConfigRedux/Actions/TaskActions";
import "../Task/task.css"

const Task = ({task}) => {
    const [newDescription, setNewDescription] = useState(task.description);

    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useDispatch();


        // Gérer l'état "fait/pas fait"
    const handleToggle = () => {
        dispatch(toggletask(task.id))
    };

        // supprimer une tache
    const handleRemove = () => {
        dispatch(removetask(task.id))
    };

        // Gérer la mise à jour de la tâche
    const handleUpdate = () => {
            if (newDescription.trim()) {
                console.log('Mise à jour de la tâche', { id: task.id, description: newDescription }); // Debug
                dispatch(updatetask({ id: task.id, description: newDescription }));
              setIsEditing(false);
            } else {
              alert("La description ne peut pas être vide.");
            }
          };
    
    // Activer le mode édition
    const handleEdit = () => {
        setIsEditing(true);
    };

    return (
        <>
        <div>
            {
                isEditing 
                ? 
                ( 
                <div>
                    
                    <input placeholder='Nouvelle description'
                    required
                    type="text"  
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                    />
                    <button onClick={handleUpdate}>Sauvegarder</button>
                </div>
                ) 
                : 
                (
                <div>
                    <div className="taskIms">
                        <input type="checkbox" checked={task.isDone} onChange={handleToggle}/>
                        <p> {task.description} </p>
                    </div>
                    <div>
                        <button onClick={handleToggle}>
                            {task.isDone ? 'pas fait':'fait'}
                        </button>
                        <button onClick={handleRemove}>
                            supprimmer
                        </button>
                        <button onClick={handleEdit}>
                            Modifier
                        </button>
                    </div>
                </div>
                )
            }
        </div>
            
        </>
    )
}
export default Task;