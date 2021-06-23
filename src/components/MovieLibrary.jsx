import React from 'react';
import PropTypes from 'prop-types';

class MovieLibrary extends React.Component {
    constructor(props) {
        super(props);
        const { movies } = this.props;
        this.state = {
          searchText: '',
          bookmarkedOnly: false,
          selectedGenre: '',
          movies,
        };
        
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

MovieLibrary.propTypes = {
    movies: PropTypes.array.isRequired,
  };
  
export default MovieLibrary;