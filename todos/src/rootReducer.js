import { v4 as uuid } from 'uuid';

const INITIAL_STATE = {
    todos: []
};

function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case "ADD":
        return { ...state, todos: [...state.todos, {item: action.item, id: uuid()}]};
      
      case "DELETE":
        return { ...state, todos: [...state.todos.filter(todo => todo.id !== action.id) ]};

      case "UPDATE":
        const todos = state.todos.map(todo => {
          return (todo.id === action.id) ? 
          { ...todo, item: action.updateItem } : todo;
         });
        return {...state, todos }
      
      default:
        return state;
    }
  }
  
  export default rootReducer;