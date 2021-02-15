export default function AppReducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        selectedTask: { id: 0, descr: '' }
      };
    case 'EDIT_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return action.payload;
          } else {
            return task;
          }
        }),
        selectedTask: { id: 0, descr: '' }
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(
          (task) => task.id !== action.payload
        ),
        selectedTask: { id: 0, descr: '' }
      };
    case 'SELECTED_TASK':
      return {
        ...state,
        selectedTask: action.payload
      };
    default:
      return state;
  }
}
