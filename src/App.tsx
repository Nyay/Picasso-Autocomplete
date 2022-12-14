import React from 'react';
import './App.css';
import {Autocomplete} from './components/Autocomplete/Autocomplete';

function App() {
  return (
    <div>
      <header className="App-content">
          <Autocomplete header={'Компании'} />
      </header>
    </div>
  );
}

export default App;
