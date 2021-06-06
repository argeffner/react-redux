import React from 'react';
import PropTypes from 'prop-types';
import './Meme.css';

function Meme({id, url, upText, downText, deleteM}) {
  
  const remove = () => deleteM(id);
    
  return (
    <div className="meme">
        <span className="up-text">{upText}</span>
        <img src={url} alt="meme" />
        <span className="down-text">{downText}</span>
        <button id="deleteBtn" onClick={remove}>
          DELETE
        </button>
    </div>
  );
}

// used to check if data is valid (a string in this case)
Meme.propTypes = {
    upText: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    downText: PropTypes.string.isRequired
  };

export default Meme;