import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class SecondPart extends Component {
  constructor() {
    super();
    this.state = {
      storyline: '',
      rating: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { storyline, rating } = this.state;
    return (
      <>
        <label htmlFor="storyline" data-testid="storyline-input-label">
          Sinopse
          <textarea
            name="storyline"
            id="storyline"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="rating" data-testid="rating-input-label">
          Avaliação
          <input
            id="rating"
            value={ rating }
            name="rating"
            type="number"
            data-testid="rating-input"
            onChange={ this.handleChange }
          />
        </label>
      </>
    );
  }
}

SecondPart.propTypes = {
  // storyline: PropTypes.string.isRequired,
  // rating: PropTypes.number.isRequired,
};

export default SecondPart;
