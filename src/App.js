import React from 'react';
import './App.css';
import MovieLibrary from './components/MovieLibrary';
import Header from './components/Header';
import Movies from './data';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieLibrary movies={ Movies } />
      </div>
    );
  }
}

export default App;
