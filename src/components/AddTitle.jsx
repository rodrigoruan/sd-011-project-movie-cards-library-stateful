import React from 'react';
import PropTypes from 'prop-types';

class AddTitle extends React.Component {
  render() {
    const { handleTitle, title } = this.props;
    return (
      <div>
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            name=""
            id="title-input"
            value={ title }
            data-testid="title-input"
            onChange={ handleTitle }
          />
        </label>
      </div>
    );
  }
}

AddTitle.propTypes = {
  handleTitle: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default AddTitle;
