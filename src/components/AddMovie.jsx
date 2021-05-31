import React from 'react';
import PropTypes from 'prop-types';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};
class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler = ({ target }) => {
    let { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { onClick, title } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label data-testid="title-input-label" htmlFor="">
          Título
          <input
            type="text"
            value={ initialState.title }
            data-testid="title-input"
            onChange={ this.onChangeHandler }
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
};

export default AddMovie;
