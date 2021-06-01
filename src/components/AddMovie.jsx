import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import TitleGroup from './TitleGroup';
import SubtitleGroup from './SubtitleGroup';
import ImageGroup from './ImageGroup';
import StorylineGroup from './StorylineGroup';
import RatingGroup from './RatingGroup';
import GenderGroup from './GenderGroup';
import SubmitButton from './SubmitButton';

export default class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.handleAction = this.handleAction.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);
    const emptyState = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.setState(emptyState);
  };

  handleAction = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { title, subtitle, imagePath, storyline, rating, gender } = this.state;
    return (
      <Form onSubmit={ this.handleSubmit } data-testid="add-movie-form" className="col">
        <TitleGroup onChange={ this.handleAction } value={ title } />
        <SubtitleGroup onChange={ this.handleAction } value={ subtitle } />
        <ImageGroup onChange={ this.handleAction } value={ imagePath } />
        <StorylineGroup onChange={ this.handleAction } value={ storyline } />
        <RatingGroup onChange={ this.handleAction } value={ rating } />
        <GenderGroup onChange={ this.handleAction } value={ gender } />
        <SubmitButton onChange={ this.handleSubmit } />
      </Form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};
