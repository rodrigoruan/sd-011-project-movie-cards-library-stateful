import React from 'react';
import PropTypes from 'prop-types';

class AddInputsToForm extends React.Component {
  render() {
    const { handleChange, title, subtitle } = this.props;
    return (
      <div className="add-inputs">
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            type="text"
            name="title"
            id="title"
            value={ title }
            data-testid="title-input"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="subtitle" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            name="subtitle"
            id="subtitle"
            value={ subtitle }
            data-testid="subtitle-input"
            onChange={ handleChange }
          />
        </label>
      </div>
    );
  }
}

AddInputsToForm.propTypes = {
  handleChange: PropTypes.func,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

AddInputsToForm.defaultProps = {
  handleChange: 'undefined',
  title: 'undefined',
  subtitle: 'undefined',
};

export default AddInputsToForm;
