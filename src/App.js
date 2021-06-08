import React from 'react';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import MovieLibrary from './components/MovieLibrary';
// import MovieCard from './components/MovieCard';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <AddMovie />
        <MovieLibrary />
      </div>
    );
  }
}

export default App;
