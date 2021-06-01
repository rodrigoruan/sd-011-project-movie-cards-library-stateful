import React from 'react';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';

class App extends React.Component {
  constructor() {
    super();
    this.handleAddMovies = this.handleAddMovies.bind(this);
  }

  handleAddMovies() {
    console.log('a');
  }

  render() {
    return (
      <main>
        <header className="App">
          <Header />
        </header>
        <section>
          <SearchBar
            searchText=""
            onSearchTextChange=""
            bookmarkedOnly=""
            onBookmarkedChange=""
            selectedGenre=""
            onSelectedGenreChange=""
          />
        </section>
        <AddMovie onClick={ this.handleAddMovies } />
      </main>
    );
  }
}

export default App;
