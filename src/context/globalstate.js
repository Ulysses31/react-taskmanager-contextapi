import React, {
  createContext,
  useEffect,
  useReducer
} from 'react';
import PropTypes from 'prop-types';
import AppReducer from './reducer';

const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
  selectedTask: { id: 0, descr: '' }
};

export const GlobalContext = createContext(initialState);

export default function GlobalContextProvider({
  children
}) {
  const [state, dispatch] = useReducer(
    AppReducer,
    initialState
  );

  useEffect(() => {
    localStorage.setItem(
      'tasks',
      JSON.stringify(state.tasks)
    );
  }, [state]);

  const addTask = (task) => {
    dispatch({
      type: 'ADD_TASK',
      payload: task
    });
  };

  const editTask = (task) => {
    dispatch({
      type: 'EDIT_TASK',
      payload: task
    });
  };

  const deleteTask = (id) => {
    dispatch({
      type: 'DELETE_TASK',
      payload: id
    });
  };

  const setSelectedTask = (task) => {
    dispatch({
      type: 'SELECTED_TASK',
      payload: task
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        tasks: state.tasks,
        selectedTask: state.selectedTask,
        addTask,
        editTask,
        deleteTask,
        setSelectedTask
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

// ****** Props Validations ********
GlobalContextProvider.propTypes = {
  children: PropTypes.object.isRequired
};
