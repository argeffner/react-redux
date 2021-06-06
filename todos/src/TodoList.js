import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

function TodoList() {
  const todos = useSelector(st => st.todos);
  const dispatch = useDispatch();
  
  function make(item) {
    dispatch({ type: "ADD", item });
  }

  function edit(id, updateItem) {
    dispatch({ type: "UPDATE", id, updateItem });
  }

  function remove(id) {
    dispatch({ type: 'DELETE', id})
  }

  const todoParts = todos.map(todo => (
    <Todo
      key={todo.id}
      id={todo.id}
      item={todo.item}
      handleDelete={remove}
      update={edit}
      />
   ));
 
    return (
      <div>
        <NewTodoForm newTodo={make} />
        <ul>{todoParts}</ul>
      </div>
    )
}

export default TodoList;