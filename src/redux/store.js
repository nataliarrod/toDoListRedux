import { createStore, combineReducers } from 'redux';
import { tasksReducer } from './actions/tasks.actions';

const rootReducer = combineReducers({ tasksReducer });

export const store = createStore(rootReducer);
