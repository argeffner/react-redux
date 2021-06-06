import React, {useState} from 'react';
// import { v4 as uuid } from 'uuid';

function NewTodoForm({newTodo}) {
    const [formData, setFormData] = useState("");

    const handleChange = (e) => {
      setFormData(e.target.value)
    }
  
    const submitData = (e) => {
        e.preventDefault();
        newTodo(formData);
        setFormData('');
    };

    return (
        <div>
          <form onSubmit={submitData}>
            <label htmlFor='item'>Item</label>
            <input 
              id='item'
              type='text'
              name='item'
              value={formData}
              onChange={handleChange} />
              <button>Add a Todo</button>
          </form>
        </div>
    );
 }

 export default NewTodoForm;