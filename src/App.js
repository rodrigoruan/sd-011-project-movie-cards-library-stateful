import React, { Component } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: '',
      favorite: false,
      genre: '',
    };

    this.searchText = this.searchText.bind(this);
    this.searchFavorite = this.searchFavorite.bind(this);
    this.searchGenre = this.searchGenre.bind(this);
  }

  searchText(event) {
    this.setState({ text: event.target.value });
  }

  searchFavorite(event) {
    this.setState({ favorite: event.target.checked });
  }

  searchGenre(event) {
    this.setState({ genre: event.target.value });
  }

  render() {
    const { text, favorite, genre } = this.state;
    return (
      <div className="App">
        <Header />
        <SearchBar
          searchText={ text }
          onSearchTextChange={ this.searchText }
          bookmarkedOnly={ favorite }
          onBookmarkedChange={ this.searchFavorite }
          selectedGenre={ genre }
          onSelectedGenreChange={ this.searchGenre }
        />
      </div>
    );
  }
}

export default App;
