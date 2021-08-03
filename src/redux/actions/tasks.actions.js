import { ADD_TASK, DELETE_TASK } from './types';

const initialState = {
  tasks: [],
};

export function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(
          (product) => product.id !== action.payload
        ),
      }
    default:
      return state;
  }
};

export function addTask(task) {
  return {
    type: ADD_TASK,
    payload: task,
  };
};

export function deleteTask(taskId) {
  return {
    type: DELETE_TASK,
    payload: taskId,
  };
};