import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Title from './Title';
// import Subtitle from './Subtitle';
// import ImagePath from './ImagePath';
// import StoryLine from './StoryLine';
// import Rating from './Rating';
// import Genre from './Genre';

class AddMovie extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
    };

    this.handleChange = this.handleChange.bind(this);
    // this.afterTheChange = this.afterTheChange(this);
  }

  handleChange({ target }) {
    this.setState({ title: target.value });
  }

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
    const { title } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title title={ title } handleChange={ this.handleChange } />
        {/* <p>{subtitle}</p>
        <p>{imagePath}</p>
        <p>{storyLine}</p>
        <p>{rating}</p>
        <p>{genre}</p> */}

      </form>
    );
  }
}

export default AddMovie;
// AddMovie.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };
