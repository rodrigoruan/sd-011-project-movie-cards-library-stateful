import React from 'react';
import PropTypes from 'prop-types';
import AddTitle from './AddTitle';
// import AddSubtitle from './AddSubtitle';

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
      </form>
    );
  }
}

AddMovie.propTypes = PropTypes.component;

export default AddMovie;
