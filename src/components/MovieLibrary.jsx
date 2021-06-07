import PropTypes from 'prop-types';
import React, { Component } from 'react';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import Data from '../data';

export default class MovieLibrary extends Component {
  constructor() {
    super();

    this.state = {
      movies: Data,
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',

    };
    this.handlerChange = this.handlerChange.bind(this.props);
  }

  handlerChange({ event }) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <section>
        <SearchBar onChange={ this.handlerChange } />
      </section>
    );
  }
}

MovieLibrary.propType = {
  Data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
