import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
import './App.css';

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
    this.handleInfo = this.handleInfo.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleInfo({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(({
      [name]: value,
    }));
  }

  onClick({ target }) {
    console.log(target);
    this.setState(({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <AddMovie func={ this.handleInfo } value={ this.state } onClick={ this.onClick } />
      </div>
    );
  }
}

export default App;
