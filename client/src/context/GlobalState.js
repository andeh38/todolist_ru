import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

//initial state
const initialState = {
  todos: [],
  error: null,
  loading: true,
};

// create context
export const GlobalContext = createContext(initialState);

export const GloblaProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions

  async function getTodos() {
    try {
      const res = await axios.get('/api/v1/todos');

      dispatch({
        type: 'GET_TODOS',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'TODO_ERROR',
        payload: err.response.data.error
      });
    }
  }

  async function deleteTodo(ids) {
    ids.map(async (id) => {
      try {
        await axios.delete(`/api/v1/todos/${id}`);
        dispatch({
          type: 'DELETE_TODO',
          payload: id
        });
      } catch (err) {
        dispatch({
          type: 'TODO_ERROR',
          payload: err.response.data.error
        });
      }
    })

  }

  async function addTodo(todo) {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('api/v1/todos', todo, config);
      dispatch({
        type: 'ADD_TODO',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'TODO_ERROR',
        payload: err.response.data.error
      });
    }


  }

  return (
    <GlobalContext.Provider
      value={{
        todos: state.todos,
        error: state.error,
        loading: state.loading,
        getTodos,
        deleteTodo,
        addTodo
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
