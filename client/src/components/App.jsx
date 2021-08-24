/* eslint-disable import/extensions */
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [character, setCharacter] = useState('');

  const getCharacterData = () => {
    axios.get('/character')
      .then((data) => {
        setCharacter(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="AppBody">
      <span>Hi</span>
      <button type="button" onClick={getCharacterData}>Get Character Data</button>
    </div>
  );
}

export default App;
