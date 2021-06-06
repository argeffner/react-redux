import React, {useState} from 'react';
import {v4 as uuid} from "uuid";
import './NewMemeForm.css';

const DEFAULT = { url: '', upText: '', downText: ''};

function NewMemeForm({newMeme}) {
    const [formData, setFormData] = useState(DEFAULT);
    
    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(formData => ({...formData, [name]: value}))
    }

    const submitData = e => {
        e.preventDefault();
        newMeme({...formData, id: uuid()});
        setFormData(DEFAULT);
    }

    return (
      <div>
        <form onSubmit={submitData}>
            <label htmlFor="url">Image URL</label> 
            <input 
               id="url"
               type="text"
               name="url"
               value={formData.url}
               onChange={handleChange} />
            <label htmlFor="upText">Upper Text</label> 
            <input 
               id="up"
               type="text"
               name="upText"
               value={formData.upText}
               onChange={handleChange} />
            <label htmlFor="dowmText">Lower Text</label> 
            <input 
               id="down"
               type="text"
               name="downText"
               value={formData.downText}
               onChange={handleChange} />
            <button type="submit" id='fs'> 
            Add a meme 
            </button>
          </form>
      </div>
    )
}

export default NewMemeForm;