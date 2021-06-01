import React from 'react';
import PropTypes from 'prop-types';

class CreateInput extends React.Component {
  render() {
    const { type, label, id, value, change } = this.props;
    return (
      <label htmlFor={ id } data-testid={ `${id}-input-label` }>
        {label}
        <input
          type={ type }
          name={ id }
          id={ id }
          data-testid={ `${id}-input` }
          value={ value }
          onChange={ change }
        />
      </label>
    );
  }
}

export default CreateInput;

CreateInput.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  change: PropTypes.func.isRequired,
  // https://stackoverflow.com/questions/41808428/react-proptypes-allow-different-types-of-proptypes-for-one-prop
};

CreateInput.defaultProps = {
  type: 'text',
};
