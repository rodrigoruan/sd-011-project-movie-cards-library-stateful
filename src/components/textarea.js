import React from 'react';
import PropTypes from 'prop-types';

class Textarea extends React.Component {
  render() {
    const { handler, value, name } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="input">
        Sinopse
        <textarea
          data-testid="storyline-input"
          value={ value }
          name={ name }
          onChange={ handler }
        />
      </label>
    );
  }
}

export default Textarea;

Textarea.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};
