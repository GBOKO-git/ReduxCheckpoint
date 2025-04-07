
// action types
const ADD_TASK  = "ADD_TASK";
const TOGGLE_TASK  = "TOGGLE_TASK";
const REMOVE_TASK  = "REMOVE_TASK";
const UPDATE_TASK  = "UPDATE_TASK";
const FILTER_TASK  = "FILTER_TASK";

// Create actions
// create tasks action
const addtask = (task) => ({
    type: ADD_TASK,
    payload:task,
});

// toggle task action
const toggletask = (id) => ({
    type: TOGGLE_TASK,
    payload: id,
});


// remove task action
const removetask = (id) => ({
    type: REMOVE_TASK,
    payload: id,
});


// update task action
const updatetask = (task) => ({
    type: UPDATE_TASK,
    payload: {
        id: task.id,          // id de la tâche
        description: task.description,  // nouvelle description
      }
});


// filter task action
const filtertasks = (status) => ({
    type: FILTER_TASK,
    payload: status,
});

export {addtask, updatetask, removetask, toggletask, filtertasks};
export { ADD_TASK, TOGGLE_TASK, REMOVE_TASK, UPDATE_TASK, FILTER_TASK }