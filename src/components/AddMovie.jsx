import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Title from './Title';
import Subtitle from './Subtitle';
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

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeSubtitle = this.handleChangeSubtitle.bind(this);
  }

  handleChangeTitle({ target }) {
    this.setState({ title: target.value });
  }

  handleChangeSubtitle({ target }) {
    this.setState({ subtitle: target.value });
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
    const { title, subtitle } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title title={ title } handleChangeTitle={ this.handleChangeTitle } />
        <Subtitle value={ subtitle } handleChangeSubtitle={ this.handleChangeSubtitle } />
      </form>
    );
  }
}

export default AddMovie;
// AddMovie.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };
