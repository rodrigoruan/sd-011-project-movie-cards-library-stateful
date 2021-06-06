// implement AddMovie component here
import React from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: '0',
      genre: 'action',
    };
  }

  render() {
    const { subtitle, title, imagePath, storyLine, rating, genre } = this.state;
    return (
      <form action="" data-testid="add-movie-form">
        <p>{subtitle}</p>
        <p>{title}</p>
        <p>{imagePath}</p>
        <p>{storyLine}</p>
        <p>{rating}</p>
        <p>{genre}</p>
      </form>
    );
  }
}

/* AddMovie.propTypes = {
  onClick: PropTypes.func,
};

AddMovie.defaultProps = {
  onClick: () => {},
};
 */
export default AddMovie;
