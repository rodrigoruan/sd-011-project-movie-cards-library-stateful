import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import Title from './Title';
// import Subtitle from './Subtitle';
// import ImagePath from './ImagePath';
// import StoryLine from './StoryLine';
// import Rating from './Rating';
// import Genre from './Genre';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyLine: '',
      rating: 0,
      genre: 'action',
    };

    // this.handleChange = this.handleChange(this);
    // this.afterTheChange = this.afterTheChange(this);
  }

  // handleChange({ target }) {
  //   const { name, value } = target;
  //   this.setState({ [name]: value });
  // }

  // afterTheChange() {
  //   const { onClick } = this.props;
  //   onClick(this.state);
  //   this.setState({
  //     subtitle: '',
  //     title: '',
  //     imagePath: '',
  //     storyline: '',
  //     rating: 0,
  //     genre: 'action',
  //   });
  // }

  render() {
    // const { onClick } = this.props;
    const { subtitle, title, imagePath, storyLine, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
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

export default AddMovie;
// AddMovie.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };
