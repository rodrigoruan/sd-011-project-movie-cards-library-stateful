import React from 'react';
import PropTypes from 'prop-types';
/* Requisito 6 */
class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
    this.stateSet = this.stateSet.bind(this);
  }

  stateSet() {
    const { onClick } = this.props;
    onClick();
  }
  /* Requisito 7,8 */
  render() {
    const {
      title,
    } = this.state;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="text">
          Título
                    <input
            value={title}
            data-testid="title-input"
            onChange={this.stateSet}
            type="text"
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;