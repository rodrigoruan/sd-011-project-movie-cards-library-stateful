import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

export default class MovieLibrary extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     searchText: '',
  //     bookmarkedOnly: false,
  //     selectedGenre: '',
  //     movies: this.props.data,
  //   };
  // }

  render() {
    return (
      <div>
        <SearchBar />
        <AddMovie />
      </div>
    );
  }
}
