import React from 'react';
import PropTypes from 'prop-types';

class AddSubtitle extends React.Component {
  render() {
    const { handleSubtitle, subtitle } = this.props;
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name=""
          id="subtitle-input"
          value={ subtitle }
          data-testid="title-input"
          onChange={ handleSubtitle }
        />
      </label>
    );
  }
}

AddSubtitle.propTypes = {
  handleSubtitle: PropTypes.func.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default AddSubtitle;
