import React from 'react';
import NewMemeForm from './NewMemeForm';
import Meme from './Meme';
import { useSelector, useDispatch } from "react-redux";
import './App.css';

function App() {
  const memes = useSelector(st => st.memes)
  const dispatch = useDispatch();

  const newMeme = (newM) => dispatch({type: 'ADD', meme: newM})
  const deleteMeme = (id) => dispatch({type: "DELETE", id})

  const memeItems = memes.map(m => (
    <Meme 
      key={m.id}
      url={m.url}
      upText={m.upText}
      downText={m.downText}
      deleteM={() => deleteMeme(m.id)}
      />
   ));

  return (
    <div className="App">
      <NewMemeForm newMeme={newMeme}/>
      {memeItems}
    </div>
  );
}

export default App;
