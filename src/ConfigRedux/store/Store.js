
import { legacy_createStore as createStore } from 'redux';
import TaskReducers from '../Reducers/TaskReducers';

const store = createStore(TaskReducers);

export default store;
