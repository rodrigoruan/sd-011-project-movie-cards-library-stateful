import React, { Component } from 'react';
// import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

export default class TitleGroup extends Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <div>
        <label htmlFor="titleInput" data-testid="title-input-label">
          Título
          <input
            id="titleInput"
            name="title"
            onChange={ onChange }
            value={ value }
            data-testid="title-input"
            type="text"
            placeholder="ex: A volta dos que não foram"
          />
        </label>
      </div>
    );
  }
}

TitleGroup.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
