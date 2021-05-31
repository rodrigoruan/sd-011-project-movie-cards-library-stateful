import React from 'react';
import Header from './components/Header';
import './App.css';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    // this.handler = this.handler.bind(this);
  }
  // handler() {
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <AddMovie />
      </div>
    );
  }
}

export default App;
