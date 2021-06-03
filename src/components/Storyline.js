import React from 'react';
import PropTypes from 'prop-types';

class Storyline extends React.Component {
  render() {
    const { storyline } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          data-testid="storyline-input"
          value={ storyline }
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  storyline: PropTypes.string,
};

Storyline.defaultProps = {
  storyline: '',
};

export default Storyline;
