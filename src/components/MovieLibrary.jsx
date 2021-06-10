import React from 'react';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
    constructor(props) {
      super(props)
      const { movies } = this.props;
      this.state = {
        searchText: '',
        bookmarkedOnly: false,
        selectedGenre: '',
        movies,
      }
      this.onClick = this.onClick.bind(this);
    };

    onClick(e) {
      e.preventDefault();
      this.setState((previousState) => ({
        movies: [...previousState, e]
      }));
    }

  render() {
    return (
      <AddMovie onClick={this.onClick}/>
    );
  }
}

export default MovieLibrary;
