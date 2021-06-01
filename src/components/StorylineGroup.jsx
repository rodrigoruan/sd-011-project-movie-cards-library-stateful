import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

export default class StorylineGroup extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <Form.Group>
        <Form.Label data-testid="storyline-input-label">Sinopse</Form.Label>
        <Form.Control
          name="storyline"
          value={value}
          onChange={onChange}
          data-testid="storyline-input"
          as="textarea"
          type="text"
        />
      </Form.Group>
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
