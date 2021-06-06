import React, {useState} from 'react';

const Todo = ({item, handleDelete, id, update}) => {

  const [editItem, setEditItem] = useState(item);
  const [currEdit, setCurrEdit] = useState(false);

  const remove = () => handleDelete(id);

  const handleEdit = () => {setCurrEdit(edit => !edit)}; // edit btn

  const handleChange = (e) => {setEditItem(e.target.value)}; // change value after edit

  const handleUpdate = (e) => {
      e.preventDefault();
      update(id, item);
      setCurrEdit(false);
  };

  if (currEdit) {
    return (
      <div>
        <form onSubmit={handleUpdate}>
          <input type='text' value={editItem} onChange={handleChange}/>
          <button>Make Change</button>
        </form>
      </div>
    )
  } else {
    return (
        <div>
          <li style={{margin: '20px 0 2px 0'}}>{editItem}</li>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={remove}>x</button>
        </div>
    )
  }
}

export default Todo;