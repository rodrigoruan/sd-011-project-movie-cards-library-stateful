import React from 'react';
import PropTypes from 'prop-types';

class Label extends React.Component {
  render() {
    const { alias, text, value, func } = this.props;
    return (
      <label data-testid={ `${alias}-input-label` } htmlFor={ alias }>
        { text }
        <input
          data-testid={ `${alias}-input` }
          type={ alias === 'rating' ? 'number' : 'text' }
          name={ alias }
          value={ value }
          onChange={ func }
        />
      </label>
    );
  }
}

Label.propTypes = {
  alias: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};

export default Label;
