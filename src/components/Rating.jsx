import React from 'react';
import PropTypes from 'prop-types';

/*
componemte Rating
-> recebe como prop de movie card rating, a nota do filme e a renderiza com os classname e dat-testid referentes
-> ocorre a validação dessa prop como
*/
class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="movie-card-rating" data-testid="rating">
        <span className="rating">{rating}</span>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};
// o default props serve para definir um valor padrao para a sua prop nesse casso undefined

Rating.defaultProps = {
  rating: 'undefined',
};

export default Rating;
