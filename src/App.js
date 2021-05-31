import React, { Component } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar
          data-testid="search-bar-form"
          searchText=""
          onSearchTextChange=""
          bookmarkedOnly=""
          onBookmarkedChange=""
          selectedGenre=""
          onSelectedGenreChange=""
        />
      </div>
    );
  }
}

export default App;
