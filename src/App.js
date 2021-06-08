import React from 'react';
import Header from './components/Header';
import './App.css';
import MovieLibrary from './components/MovieLibrary';
import Data from './data';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieLibrary movies={ Data } />
      </div>
    );
  }
}

export default App;
