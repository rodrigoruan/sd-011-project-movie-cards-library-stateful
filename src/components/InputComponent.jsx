import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputComponent extends Component {
  render() {
    const { info, subtitle, title, imagePath, rating, handleChange } = this.props;
    const value = { subtitle, title, imagePath, rating };
    return (
      <div>
        { info.map((input) => (
          <label
            htmlFor={ input.name }
            data-testid={ input.testLabel }
            key={ input.name }
          >
            { input.title }
            <input
              id={ input.name }
              data-testid={ input.testInput }
              type={ input.type }
              value={ value[input.name] }
              onChange={ handleChange }
              name={ input.name }
            />
          </label>
        ))}
      </div>
    );
  }
}

export default InputComponent;

InputComponent.propTypes = {
  info: PropTypes.arrayOf(
    PropTypes.shape({
      testLabel: PropTypes.string,
      testInput: PropTypes.string,
      name: PropTypes.string,
      title: PropTypes.string,
      type: PropTypes.string,
    }),
  ),
  subtitle: PropTypes.string,
  title: PropTypes.string,
  imagePath: PropTypes.string,
  rating: PropTypes.number,
  handleChange: PropTypes.func,
};

InputComponent.defaultProps = {
  info: [],
  subtitle: '',
  title: '',
  imagePath: '',
  rating: 0,
  handleChange: undefined,
};
