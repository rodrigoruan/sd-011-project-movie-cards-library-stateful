import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TitleForm extends Component {
  //  prettier-ignore
  render() {
    const { title, onChangeHandler } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          name="title"
          type="text"
          onChange={ onChangeHandler }
          value={ title }
          data-testid="title-input"
        />
      </label>
    );
  }
}

TitleForm.propTypes = {
  title: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};
