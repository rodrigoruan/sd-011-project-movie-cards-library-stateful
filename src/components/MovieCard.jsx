import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

// aqui a coisa ja começa a ficar um pouco mais complexa
// recebe novamente o movies como props e fizemos a desconstrução de alguns dados afim de montar o card com as imformações por filmes
// ao fim, do renderizamos o Rating, enviamos como props para o componente rating a nota do filme pois la ela sera tratada
// novamente fazemos as validações dos tipos de props com o proptypes
// obs: todos os elementos renderizados aqui possuem sua classname e data-testid para a passagem nos testes expecificos

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <div className="movie-card" data-testid="movie-card">
        <img alt="Movie Cover" className="movie-card-image" src={ imagePath } />
        <div className="movie-card-body">
          <h4 data-testid="movie-card-title" className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <Rating rating={ rating } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
