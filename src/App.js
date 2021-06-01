import React from 'react';
import Header from './components/Header';
import './App.css';
import MovieLibrary from './components/MovieLibrary';
import movies from './data';

class App extends React.Component {
  render() {
    return (
      <main>
        <header className="App">
          <Header />
        </header>
        <MovieLibrary movies={ movies } />
      </main>
    );
  }
}

export default App;
