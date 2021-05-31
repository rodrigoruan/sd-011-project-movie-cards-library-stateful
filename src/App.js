import React from 'react';
import Header from './components/Header';
import './App.css';
import MovieLobrary from './MovieLibrary'

function App() {
  return (
    <div className="App">
<MovieLibrary />
      <Header />
    </div>
  );
}

export default App;
