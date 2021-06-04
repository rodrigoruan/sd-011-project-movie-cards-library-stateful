import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

export default class MovieLibrary extends React.Component {
  // constructor(props) {
  //   super(props);
  //  const { data } = this.props;
  //   this.state = {
  //     searchText: '',
  //     bookmarkedOnly: false,
  //     selectedGenre: '',
  //     movies: data,
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
