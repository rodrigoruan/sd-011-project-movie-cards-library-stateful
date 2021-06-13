import React from 'react';
import PropTypes from 'prop-types';
import TitleInput from './TitleInput';
import SubtitleInput from './SubtitleInput';
import ImageInput from './ImageInput';
import StorylineInput from './StorylineInput';
import RatingInput from './RatingInput';

class AddMovie extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <div>
        <form data-testid="add-movie-form">
          { onClick }
          <TitleInput />
          <SubtitleInput />
          <ImageInput />
          <StorylineInput />
          <RatingInput />
        </form>
      </div>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
