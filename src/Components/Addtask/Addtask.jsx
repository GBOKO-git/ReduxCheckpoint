import React from 'react'
import { useState } from 'react'
import { addtask } from '../../ConfigRedux/Actions/TaskActions'
import './Addtask.css'
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';


const Addtask = () => {
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();

    const handleAddTask = (e) => {
        e.preventDefault();
        if ( description) {
            dispatch(addtask({id : nanoid(), description, isDone: false }));
            setDescription('');
        }
    
    }
    

    return(
        <>
            <div >
                <h3>Ajouter une tache</h3>
                <form 
                className="taskform">
                    
                    <div className="description">
                        <input placeholder='la description'
                        required
                        type="text"  
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div>
                    <button className='submitbtn' onClick={handleAddTask}>Ajouter</button>
                    </div>
                </form>
            </div>
            
        </>
    )
}

export default Addtask;