import React, { Component } from 'react';
// import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

export default class StorylineGroup extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label htmlFor="textareaInputId" data-testid="storyline-input-label">
          Sinopse
          <textarea
            id="textareaInputId"
            name="storyline"
            value={ value }
            onChange={ onChange }
            data-testid="storyline-input"
            as="textarea"
            type="text"
          />
        </label>
      </div>
    );
  }
}

StorylineGroup.defaultProps = {
  value: 'value',
  onChange: 'onChange',
};

StorylineGroup.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
