import React from 'react';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';
import Data from './data';
import './App.css';

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
