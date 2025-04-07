import { ADD_TASK, TOGGLE_TASK, REMOVE_TASK, UPDATE_TASK, FILTER_TASK  } from "../Actions/TaskActions";

const initialState = {
    tasks: [
        {
            id: Date.now(),
            description: 'GOMYCODE : dev full stack'
        },
        {
            id: Date.now(),
            description: 'Prof : Mr Maxence'
        },
        {
            id: Date.now(),
            description: 'Dev : Amara Gboko'
        },
    ],  // Ceci doit être un tableau
    filter: 'all', // 'all', 'done', 'not_done'
  };

const TaskReducers = (state = initialState, action ) => {
    
    switch (action.type) {
        case ADD_TASK:
            return {...state, tasks:[...state.tasks, action.payload],};
    
        case TOGGLE_TASK:
            return {
                ...state, 
               tasks: state.tasks.map((task) =>
                task.id === action.payload ? {...task, isDone: !task.isDone} :task ),
            };
     
        case REMOVE_TASK:
            return {
                ...state, 
                tasks: state.tasks.filter((task) => task.id !== action.payload)
            };
    
        case UPDATE_TASK:
            console.log('Tâche mise à jour:', action.payload);
            return {
                ...state, 
                tasks: state.tasks.map((task) => 
                task.id === action.payload.id ? {...task, description: action.payload.description } : task)
            };
        
        case FILTER_TASK:
            return {
                ...state, 
                filter: action.payload,
            };
        default:
            return state;
    }
}

export default TaskReducers;