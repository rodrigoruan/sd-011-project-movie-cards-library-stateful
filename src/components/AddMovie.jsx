import React from 'react';
import PropTypes from 'prop-types';
import AddTitle from './AddTitle';
import AddSubtitle from './AddSubtitle';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <form data-testid="add-movie-form">
        <AddTitle />
        <AddSubtitle />
      </form>
    );
  }
}

AddMovie.propTypes = PropTypes.component;

AddMovie.propTypes = {
  // title: PropTypes.string.isRequired,
  // subtitle: PropTypes.string.isRequired,
};

/**
 * Consultei o repositório do Bruno Duarte para resolver esse ProTypes.component
 * Link: https://github.com/tryber/sd-011-project-movie-cards-library-stateful/pull/100/commits/6514823095a37669dc42b1e756b04f2527fcf8fc
 */

export default AddMovie;
